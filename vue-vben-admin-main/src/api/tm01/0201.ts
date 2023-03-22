import { defBearerHttp } from '/@/utils/http/axios';
import { DeptListResultModel } from '/@/api/tm01/model/groupModel';
import { UserListResultModel } from '/@/api/tm01/model/userModel';

enum Api {
  VUE_APP_TM01_API_0201 = '/services/tm01/api/0201',
}

// Get personal center-basic settings
export const getAllDept = (params?: any) =>
  defBearerHttp.get<DeptListResultModel>({ url: Api.VUE_APP_TM01_API_0201 + '/BR', params });

export const getUserByDeptId = (deptId?: string) =>
  defBearerHttp.get<UserListResultModel>({
    url: Api.VUE_APP_TM01_API_0201 + '/BR/users/' + deptId,
  });

export const getUserByDeptCode = (params?: any) =>
  defBearerHttp.post<UserListResultModel>({
    url: Api.VUE_APP_TM01_API_0201 + '/usersGroupList',
    params,
  });

export const getUserAllByDeptId = (params?: any) =>
  defBearerHttp.post<UserListResultModel>({
    url: Api.VUE_APP_TM01_API_0201 + '/BR/usersAll',
    params,
  });

export const getDeptInfoByDeptId = (deptId?: string) =>
  defBearerHttp.get<DeptListResultModel>({ url: Api.VUE_APP_TM01_API_0201 + '/BR/' + deptId });

// 根据组织名称，查询组织信息
export const getDeptInfoByDeptName = (name?: any) =>
  defBearerHttp.get<DeptListResultModel>({
    url: Api.VUE_APP_TM01_API_0201 + '/BRNAME?name=' + name,
  });

export const saveDept = (params?: any) =>
  defBearerHttp.post<any>({ url: Api.VUE_APP_TM01_API_0201 + '/BC', params });

export const updateDept = (params?: any) =>
  defBearerHttp.put<any>({ url: Api.VUE_APP_TM01_API_0201 + '/BU', params });

export const delDept = (deptId?: string) =>
  defBearerHttp.delete<any>({ url: Api.VUE_APP_TM01_API_0201 + '/BD/' + deptId });

export const getAllDeptByAttrPage = (params?: any) =>
  defBearerHttp.get<any>({ url: Api.VUE_APP_TM01_API_0201 + '/BR/search', params });
