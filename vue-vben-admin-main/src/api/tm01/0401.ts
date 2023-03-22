import { defBearerHttp } from '/@/utils/http/axios';

enum Api {
  VUE_APP_TM01_API_0401 = '/services/tm01/api/0401',
}

/**
 * 根据角色查询菜单
 * @param {*} params 角色数组
 */
export const getMenuByRoles = (params?: any) =>
  defBearerHttp.post<any>({ url: Api.VUE_APP_TM01_API_0401 + '/getMenuByRoles', params });

export const getResourcesApi = (params?: any) =>
  defBearerHttp.get<any>({ url: Api.VUE_APP_TM01_API_0401 + '/BR', params });

export const addResourcesApi = (params?: any) =>
  defBearerHttp.post<any>({ url: Api.VUE_APP_TM01_API_0401 + '/BC', params });

export const updateResourcesApi = (params?: any) =>
  defBearerHttp.put<any>({ url: Api.VUE_APP_TM01_API_0401 + '/BU', params });

export const delResourcesApi = (params?: any) =>
  defBearerHttp.delete<any>({ url: Api.VUE_APP_TM01_API_0401 + '/BD', params });

export const updateResources = (params?: any) =>
  defBearerHttp.put<any>({ url: Api.VUE_APP_TM01_API_0401 + '/BUS', params });

export const delResources = (params?: any) =>
  defBearerHttp.delete<any>({ url: Api.VUE_APP_TM01_API_0401 + '/BDS', params });

export const updateResourcesByRole = (roleId?: string, params?: any) =>
  defBearerHttp.put<any>({ url: Api.VUE_APP_TM01_API_0401 + '/BU/' + roleId, params });
