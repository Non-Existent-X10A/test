import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
import '/@/design/index.less';
import '/@/components/VxeTable/src/css/index.scss';
import 'virtual:windi-utilities.css';
// Register icon sprite
import 'virtual:svg-icons-register';
import App from './App.vue';
import { createApp } from 'vue';
import { initAppConfigStore } from '/@/logics/initAppConfig';
import { setupErrorHandle } from '/@/logics/error-handle';
import { router, setupRouter } from '/@/router';
import { setupRouterGuard } from '/@/router/guard';
import { setupStore } from '/@/store';
import { setupGlobDirectives } from '/@/directives';
import { setupI18n } from '/@/locales/setupI18n';
import { registerGlobComp } from '/@/components/registerGlobComp';
import { useUserStore } from '/@/store/modules/user';
import { isDevMode } from './utils/env';
import Keycloak from 'keycloak-js';
import { PageEnum } from '/@/enums/pageEnum';
import { useTabs } from '/@/hooks/web/useTabs';

if (isDevMode()) {
  import('ant-design-vue/es/style');
}

async function bootstrap() {
  const app = createApp(App);

  // Configure store
  // 配置 store
  setupStore(app);

  // Initialize internal system configuration
  // 初始化内部系统配置
  initAppConfigStore();

  const userStore = useUserStore();
  // Register global components
  // 注册全局组件
  registerGlobComp(app);

  // Multilingual configuration
  // 多语言配置
  // Asynchronous case: language files may be obtained from the server side
  // 异步案例：语言文件可能从服务器端获取
  await setupI18n(app);

  // Configure routing
  // 配置路由
  setupRouter(app);

  // router-guard
  // 路由守卫
  setupRouterGuard(router);

  // init keycloak
  await initKeycloak(userStore);

  // Register global directive
  // 注册全局指令
  setupGlobDirectives(app);

  // Configure global error handling
  // 配置全局错误处理
  setupErrorHandle(app);

  // https://next.router.vuejs.org/api/#isready
  // await router.isReady();

  app.mount('#app');
}

/**
 * 初始化Keycloak
 */
async function initKeycloak(userStore) {
  // const userStore = useUserStore();

  // keycloak
  const initOptions = {
    url: import.meta.env.VITE_KEYCLOAK_OPTIONS_URL as string,
    realm: import.meta.env.VITE_KEYCLOAK_OPTIONS_REALM as string,
    clientId: import.meta.env.VITE_KEYCLOAK_OPTIONS_CLIENTID as string,
    onLoad: import.meta.env.VITE_KEYCLOAK_OPTIONS_ONLOAD as Keycloak.KeycloakOnLoad,
  };
  const keycloak = Keycloak(initOptions);
  await keycloak
    .init({ onLoad: initOptions.onLoad })
    .then(async (authenticated) => {
      if (!authenticated) {
        window.location.reload();
        return;
      } else {
        // const decode: Map<string, object> = jwtDecode(keycloak.token as string);
        await userStore.setToken(keycloak.token);
        await userStore.setKeycloak(keycloak);
        await userStore.afterLoginAction();
        const url = window.location.href;
        let nowRouter = url.substring(url.indexOf('#') + 1, url.length);
        const roleList = userStore.getRoleList as Array<string>;
        // 根据角色得不同跳转到对应得页面
        if (roleList.indexOf('lab') > 0) {
          //如果是实验室角色
          nowRouter = '/laboratory/material';
          console.log('nowRouter:', nowRouter);
        } else if (roleList.indexOf('mr') > 0) {
          //如果是测量间角色
          nowRouter = '/preciseTestRoom/size';
        } else if (roleList.indexOf('tryout') > 0) {
          //如果是试装间角色
          nowRouter = '/trialAssemblyRoom/trialAssembly';
        } else if (roleList.indexOf('empbReceive') > 0) {
          //如果是EMBP接样
          nowRouter = '/empb/empbManage';
        } else if (roleList.indexOf('supplier') > 0) {
          //如果是EMBP接样
          nowRouter = '/supplier/supplierDashboard';
        } else {
          // BTV 或akeoMan
          if (nowRouter == '/') {
            nowRouter = PageEnum.BASE_HOME;
          }
        }
        // if (nowRouter == '/') {
        //   nowRouter = PageEnum.BASE_HOME;
        // }
        // await router.push(router.getRoutes().filter((m) => m.path == nowRouter)[0]);
        await router.replace(nowRouter);
        const { refreshPage } = useTabs(router);
        await refreshPage();
        // await store.dispatch('user/keycloakLogin', keycloak.token);
      }
      setInterval(() => {
        keycloak
          .updateToken(70)
          .then(async (refreshed) => {
            if (refreshed) {
              console.log('token refresh');
              // await store.dispatch('user/keycloakLogin', keycloak.token);
            }
          })
          .catch((error) => {
            console.error('Failed to refresh token', error);
          });
      }, 60000);
    })
    .catch((error) => {
      console.log('Authenticated Failed', error);
    });
}
bootstrap();
