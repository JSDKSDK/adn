import { Injectable } from '@angular/core';
import { HttpClient as Http, HttpResponse } from '@angular/common/http';
import { ConfigService } from 'src/config/config.service';
import { Observable, Subject } from 'rxjs';
import { IResponseModel, ResponseModel } from '../models';
import { ApiResponseUtil } from '../shared/utils/api-response-util';



@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  headers: any;
  headerurlencoded: any = { 'Content-Type': 'application/x-www-form-urlencoded' };

  constructor(private http: Http, private config: ConfigService) {
    this.config.headers.subscribe((headers) => {
      if (headers) {
        this.headers = headers;
      }
    });
  } 

  get(url) {
    return this.http.get(url, { headers: this.config.getHeaders, observe: "response" });
  }

  post(url, data) {
    return this.http.post(url, data, { headers: this.config.getHeaders, observe: "response" });
  }

  put(url, data) {
    return this.http.put(url, data, { headers: this.config.getHeaders, observe: "response" });
  }

  delete(url) {
    return this.http.delete(url, { headers: this.config.getHeaders });

  }
  posturlencoded(url, data) {
    return this.http.post(url, data, { headers: this.headerurlencoded, observe: "response" });
  }

  
  public postWithModel<TInputModel>(url: string, value: TInputModel): Observable<ResponseModel> {

    let responseModel = new ResponseModel();
    let senderResponse: Subject<ResponseModel> = new Subject();

    this.post(url, value).subscribe(
      (response: HttpResponse<object>) => {
        ApiResponseUtil.httpResponseToModel(true, response.body, responseModel);
        senderResponse.next(responseModel)
      },
      (error) => {
        ApiResponseUtil.httpResponseToModel(false, error, responseModel);
        senderResponse.next(responseModel)
      }
    );

    return senderResponse.asObservable();
  }

  public putWithModel<TInputModel>(url: string, value: TInputModel): Observable<ResponseModel> {

    let responseModel = new ResponseModel();
    let senderResponse: Subject<ResponseModel> = new Subject();

    this.put(url, value).subscribe(
      (response: HttpResponse<object>) => {
        ApiResponseUtil.httpResponseToModel(true, response.body, responseModel);
        senderResponse.next(responseModel)
      },
      (error) => {
        ApiResponseUtil.httpResponseToModel(false, error, responseModel);
        senderResponse.next(responseModel)
      }
    );

    return senderResponse
      .asObservable();
  }

  public getWithModel<TOutput>(url: string, targetResult: IResponseModel): Observable<TOutput> {

    let senderResponse: Subject<any> = new Subject();

    this.get(url)
      .subscribe((response: HttpResponse<object>) => {
        ApiResponseUtil.httpResponseToModel(true, response.body, targetResult);
        senderResponse.next(targetResult)
      },
        (error) => {
          ApiResponseUtil.httpResponseToModel(false, error, targetResult);
          senderResponse.next(targetResult)
        }
      );

    return senderResponse.asObservable();
  }
  public getWithModelbyId<TOutput>(url: string,params:string, targetResult: IResponseModel): Observable<TOutput> {

    let senderResponse: Subject<any> = new Subject();
    url = url.concat(params);

    this.get(url)
      .subscribe((response: HttpResponse<object>) => {
        ApiResponseUtil.httpResponseToModel(true, response.body, targetResult);
        senderResponse.next(targetResult)
      },
        (error) => {
          ApiResponseUtil.httpResponseToModel(false, error, targetResult);
          senderResponse.next(targetResult)
        }
      );

    return senderResponse.asObservable();
  }
}

