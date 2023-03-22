import { BasicFetchResult, BasicModel, BasicSingleResult } from '/@/api/model/baseModel';
/**
 * @description: Request list interface parameters
 */
export type RoleModel = BasicModel & {};

/**
 * @description: Request list return value
 */
export type RoleListResultModel = BasicFetchResult<RoleModel>;

/**
 * @description: Request Single return value
 */
export type RoleSingleResultModel = BasicSingleResult<RoleModel>;
