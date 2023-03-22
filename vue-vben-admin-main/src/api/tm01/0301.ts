import { RoleListResultModel } from './model/roleModel';
import { defBearerHttp } from '/@/utils/http/axios';

enum Api {
  VUE_APP_TM01_API_0301 = '/services/tm01/api/0301',
}

// Get personal center-basic settings
export const getRoleApi = (params?: any) =>
  defBearerHttp.get<any>({ url: Api.VUE_APP_TM01_API_0301 + '/BR', params });

export const getRoleInfoApi = (roleName?: string) =>
  defBearerHttp.get<RoleListResultModel>({
    url: Api.VUE_APP_TM01_API_0301 + '/roleInfo?roleName=' + roleName,
  });

export const getUserListByRoleNameApi = (params?: string) =>
  defBearerHttp.get<RoleListResultModel>({
    url: Api.VUE_APP_TM01_API_0301 + '/getUserListByRoleName',
    params,
  });

export const addRoleApi = (params?: any) =>
  defBearerHttp.post<any>({ url: Api.VUE_APP_TM01_API_0301 + '/BC', params });

export const updateRoleApi = (params?: any) =>
  defBearerHttp.put<any>({ url: Api.VUE_APP_TM01_API_0301 + '/BU', params });

export const delRoleApi = (params?: any) =>
  defBearerHttp.delete<any>({ url: Api.VUE_APP_TM01_API_0301 + '/BD', params });

export const saveRoleUserApi = (params?: any) =>
  defBearerHttp.post<any>({ url: Api.VUE_APP_TM01_API_0301 + '/saveRoleUser', params });
