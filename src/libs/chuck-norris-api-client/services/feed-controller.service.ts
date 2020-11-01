/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { View } from '../models/view';
import { DailyChuck } from '../models/daily-chuck';
import { MailingListStatistic } from '../models/mailing-list-statistic';

/**
 * Feed Controller
 */
@Injectable()
class FeedControllerService extends __BaseService {
  static readonly dailyChuckRssUsingGETPath = '/feed/daily-chuck';
  static readonly dailyChuckJsonUsingGET1Path = '/feed/daily-chuck.json';
  static readonly dailyChuckRssUsingGET1Path = '/feed/daily-chuck.xml';
  static readonly dailyChuckStatsUsingGETPath = '/feed/daily-chuck/stats';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * dailyChuckRss
   * @return OK
   */
  dailyChuckRssUsingGETResponse(): __Observable<__StrictHttpResponse<View>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/feed/daily-chuck`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<View>;
      })
    );
  }
  /**
   * dailyChuckRss
   * @return OK
   */
  dailyChuckRssUsingGET(): __Observable<View> {
    return this.dailyChuckRssUsingGETResponse().pipe(
      __map(_r => _r.body as View)
    );
  }

  /**
   * dailyChuckJson
   * @return OK
   */
  dailyChuckJsonUsingGET1Response(): __Observable<__StrictHttpResponse<DailyChuck>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/feed/daily-chuck.json`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DailyChuck>;
      })
    );
  }
  /**
   * dailyChuckJson
   * @return OK
   */
  dailyChuckJsonUsingGET1(): __Observable<DailyChuck> {
    return this.dailyChuckJsonUsingGET1Response().pipe(
      __map(_r => _r.body as DailyChuck)
    );
  }

  /**
   * dailyChuckRss
   * @return OK
   */
  dailyChuckRssUsingGET1Response(): __Observable<__StrictHttpResponse<View>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/feed/daily-chuck.xml`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<View>;
      })
    );
  }
  /**
   * dailyChuckRss
   * @return OK
   */
  dailyChuckRssUsingGET1(): __Observable<View> {
    return this.dailyChuckRssUsingGET1Response().pipe(
      __map(_r => _r.body as View)
    );
  }

  /**
   * dailyChuckStats
   * @return OK
   */
  dailyChuckStatsUsingGETResponse(): __Observable<__StrictHttpResponse<MailingListStatistic>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/feed/daily-chuck/stats`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MailingListStatistic>;
      })
    );
  }
  /**
   * dailyChuckStats
   * @return OK
   */
  dailyChuckStatsUsingGET(): __Observable<MailingListStatistic> {
    return this.dailyChuckStatsUsingGETResponse().pipe(
      __map(_r => _r.body as MailingListStatistic)
    );
  }
}

module FeedControllerService {
}

export { FeedControllerService }
