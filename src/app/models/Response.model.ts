export class ResponseModel implements IResponseModel {
  message: string;
  isOk: boolean;
}

export interface IResponseModel {
  message: string;
  isOk: boolean;
}
