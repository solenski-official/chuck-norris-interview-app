/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Joke } from '../models/joke';
import { JokeSearchResult } from '../models/joke-search-result';

/**
 * Joke Controller
 */
@Injectable()
class JokeControllerService extends __BaseService {
  static readonly getCategoryValuesUsingGETPath = '/jokes/categories';
  static readonly getRandomJokeUsingGETPath = '/jokes/random';
  static readonly searchUsingGETPath = '/jokes/search';
  static readonly getJokeValueUsingGETPath = '/jokes/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getCategoryValues
   * @return OK
   */
  getCategoryValuesUsingGETResponse(): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/jokes/categories`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * getCategoryValues
   * @return OK
   */
  getCategoryValuesUsingGET(): __Observable<string> {
    return this.getCategoryValuesUsingGETResponse().pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * getRandomJoke
   * @param params The `JokeControllerService.GetRandomJokeUsingGETParams` containing the following parameters:
   *
   * - `name`: name
   *
   * - `category`: category
   *
   * @return OK
   */
  getRandomJokeUsingGETResponse(params: JokeControllerService.GetRandomJokeUsingGETParams): __Observable<__StrictHttpResponse<Joke>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.name != null) __params = __params.set('name', params.name.toString());
    if (params.category != null) __params = __params.set('category', params.category.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/jokes/random`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Joke>;
      })
    );
  }
  /**
   * getRandomJoke
   * @param params The `JokeControllerService.GetRandomJokeUsingGETParams` containing the following parameters:
   *
   * - `name`: name
   *
   * - `category`: category
   *
   * @return OK
   */
  getRandomJokeUsingGET(params: JokeControllerService.GetRandomJokeUsingGETParams): __Observable<Joke> {
    return this.getRandomJokeUsingGETResponse(params).pipe(
      __map(_r => _r.body as Joke)
    );
  }

  /**
   * search
   * @param query query
   * @return OK
   */
  searchUsingGETResponse(query: string): __Observable<__StrictHttpResponse<JokeSearchResult>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (query != null) __params = __params.set('query', query.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/jokes/search`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<JokeSearchResult>;
      })
    );
  }
  /**
   * search
   * @param query query
   * @return OK
   */
  searchUsingGET(query: string): __Observable<JokeSearchResult> {
    return this.searchUsingGETResponse(query).pipe(
      __map(_r => _r.body as JokeSearchResult)
    );
  }

  /**
   * getJokeValue
   * @param id id
   * @return OK
   */
  getJokeValueUsingGETResponse(id: string): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/jokes/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * getJokeValue
   * @param id id
   * @return OK
   */
  getJokeValueUsingGET(id: string): __Observable<string> {
    return this.getJokeValueUsingGETResponse(id).pipe(
      __map(_r => _r.body as string)
    );
  }
}

module JokeControllerService {

  /**
   * Parameters for getRandomJokeUsingGET
   */
  export interface GetRandomJokeUsingGETParams {

    /**
     * name
     */
    name?: string;

    /**
     * category
     */
    category?: string;
  }
}

export { JokeControllerService }
