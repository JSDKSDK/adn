import { IResponseModel } from "src/app/models";
import { mensajes } from "../constantes/constantes";


export class ApiResponseUtil {

  public static httpResponseLoginModel(
    isOk: boolean,
    status: number,
    targetResponseModel: IResponseModel
  ){
      if (targetResponseModel == null || targetResponseModel == undefined) {
        let type: (new () => typeof targetResponseModel);
        targetResponseModel = new type();
      }

      if (isOk) {
        Object.assign(targetResponseModel);
      } else {
        switch (status) {
          case 200:
            targetResponseModel.message = mensajes.bienvenido;
            break;
          case 401:
            targetResponseModel.message = mensajes.sesionExpirada;
            break;
          default:
            targetResponseModel.message = mensajes.servicioNoDisponible;
            break;
        }
      } 
      targetResponseModel.isOk = isOk;

      
  }

  public static httpResponseToModel(

    isOk: boolean,
    body: any,
    targetResponseModel: IResponseModel
  ): void {

    if (targetResponseModel == null || targetResponseModel == undefined) {
      let type: (new () => typeof targetResponseModel);
      targetResponseModel = new type();
    }

    if (isOk) {
      Object.assign(targetResponseModel, body);
    } else {
      switch (body.status) {
        case 0:
          targetResponseModel.message = mensajes.servicioNoDisponible;
          break;
        case 401:
          targetResponseModel.message = mensajes.sesionExpirada;
          break;
        default:
          targetResponseModel.message = body.error.message;
          break;
      }
    }

    targetResponseModel.isOk = isOk;

    this.validarToken(body.status);
  }

  private static validarToken(statusCode: number): void {

    if (statusCode == 401) {
      localStorage.clear();
      location.reload();
    }
  }
}
