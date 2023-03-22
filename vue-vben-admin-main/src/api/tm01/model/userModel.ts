import { BasicFetchResult, BasicModel, BasicSingleResult } from '/@/api/model/baseModel';
/**
 * @description: Request list interface parameters
 */
export type UserModel = BasicModel & {};

/**
 * @description: Request list return value
 */
export type UserListResultModel = BasicFetchResult<UserModel>;

/**
 * @description: Request Single return value
 */
export type UserSingleResultModel = BasicSingleResult<UserModel>;
