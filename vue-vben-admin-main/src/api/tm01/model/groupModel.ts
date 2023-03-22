import { BasicFetchResult, BasicModel, BasicSingleResult } from '/@/api/model/baseModel';
/**
 * @description: Request list interface parameters
 */
export type GroupModel = BasicModel & {
  id?: number;
  name?: string;
  category?: string;
  subGroups?: any;
  sort?: number;
  group?: number;
  no?: number;
  status?: number;
  attributes?: any;
  dateCreated?: Date;
  dateUpdated?: Date;
  userCreated?: string;
  userUpdated?: string;
};

/**
 * @description: Request list return value
 */
export type DeptListResultModel = BasicFetchResult<GroupModel>;

/**
 * @description: Request Single return value
 */
export type DeptSingleResultModel = BasicSingleResult<GroupModel>;
