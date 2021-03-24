import { ResponseModel } from "./responseModel";

export interface ListRespsonseModel<T> extends ResponseModel{
    data:T[];
}