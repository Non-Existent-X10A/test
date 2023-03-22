import { defBearerHttp } from '/@/utils/http/axios';
import { UserListResultModel } from '/@/api/tm01/model/userModel';

enum Api {
  VUE_APP_TM01_API_0101 = '/services/tm01/api/0101',
}

// Get personal center-basic settings
export const getUserApi = (params?: any) =>
  defBearerHttp.get<UserListResultModel>({ url: Api.VUE_APP_TM01_API_0101 + '/BR', params });

export const addUserApi = (params?: any) =>
  defBearerHttp.post<any>({ url: Api.VUE_APP_TM01_API_0101 + '/BC', params });

export const updateUserApi = (params?: any) =>
  defBearerHttp.put<any>({ url: Api.VUE_APP_TM01_API_0101 + '/BU', params });

export const enableOrDisableUser = (params?: any) =>
  defBearerHttp.put<any>({ url: Api.VUE_APP_TM01_API_0101 + '/BUED', params });

export const delUserApi = (params?: any) =>
  defBearerHttp.delete<any>({ url: Api.VUE_APP_TM01_API_0101 + '/BD', params });

export const resetPwd = (params?: any) =>
  defBearerHttp.post<any>({ url: Api.VUE_APP_TM01_API_0101 + '/BREVET', params });

export const joinOrLeaveDept = (deptId?: string, data?: any) =>
  defBearerHttp.post<any>({ url: Api.VUE_APP_TM01_API_0101 + '/BU/GROUP/' + deptId, data });

export const addUserWithGroupApi = (params?: any) =>
  defBearerHttp.post<any>({ url: Api.VUE_APP_TM01_API_0101 + '/BU/GROUP', params });

export const updateUserWithGroupApi = (params?: any) =>
  defBearerHttp.put<any>({ url: Api.VUE_APP_TM01_API_0101 + '/BU/GROUP', params });

/** 检查用户是否存在于组织上下级 */
export const checkUserByGroup = (params?: any) =>
  defBearerHttp.post<any>({ url: Api.VUE_APP_TM01_API_0101 + '/GROUP/CHECK', params });

export const getUserInfo = (username?: string) =>
  defBearerHttp.get<UserListResultModel>({
    url: Api.VUE_APP_TM01_API_0101 + '/BUSERNAME?username=' + username,
  });

export const getUserLoginApi = () =>
  defBearerHttp.get<UserListResultModel>({ url: Api.VUE_APP_TM01_API_0101 + '/BRNP' });

export const getUserByAttributes = (params?: any) =>
  defBearerHttp.get<any>({ url: Api.VUE_APP_TM01_API_0101 + '/BUSERATTR', params });
