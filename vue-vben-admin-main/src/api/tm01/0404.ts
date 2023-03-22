import { defBearerHttp } from '/@/utils/http/axios';

enum Api {
  VUE_APP_TM01_API_0404 = '/services/tm01/api/0404',
}

export const sidebar = () =>
  defBearerHttp.post<any>({ url: Api.VUE_APP_TM01_API_0404 + '/sidebar' });
