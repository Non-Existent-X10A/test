import { defHttp } from '/@/utils/http/axios';
import { Account } from './model/account';

enum Api {
  ACCOUNT_INFO = '/auth/getAccountInfo',
}

// Get personal center-basic settings

export const accountApi = () => defHttp.get<Account>({ url: Api.ACCOUNT_INFO });
