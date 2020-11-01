/* tslint:disable */
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpResponse,
  HttpHeaders,
} from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { SlackCommandResponse } from '../models/slack-command-response';

/**
 * Slack Controller
 */
@Injectable()
class SlackControllerService extends __BaseService {
  static readonly commandUsingPOSTPath = '/jokes/slack';

  constructor(config: __Configuration, http: HttpClient) {
    super(config, http);
  }

  /**
   * command
   * @param params The `SlackControllerService.CommandUsingPOSTParams` containing the following parameters:
   *
   * - `userName`:
   *
   * - `userId`:
   *
   * - `triggerId`:
   *
   * - `token`:
   *
   * - `text`:
   *
   * - `teamId`:
   *
   * - `teamDomain`:
   *
   * - `responseUrl`:
   *
   * - `enterpriseName`:
   *
   * - `enterpriseId`:
   *
   * - `command`:
   *
   * - `channelName`:
   *
   * - `channelId`:
   *
   * @return OK
   */
  commandUsingPOSTResponse(
    params: SlackControllerService.CommandUsingPOSTParams
  ): __Observable<__StrictHttpResponse<SlackCommandResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.userName != null) {
      __formData.append('userName', params.userName as string | Blob);
    }
    if (params.userId != null) {
      __formData.append('userId', params.userId as string | Blob);
    }
    if (params.triggerId != null) {
      __formData.append('triggerId', params.triggerId as string | Blob);
    }
    if (params.token != null) {
      __formData.append('token', params.token as string | Blob);
    }
    if (params.text != null) {
      __formData.append('text', params.text as string | Blob);
    }
    if (params.teamId != null) {
      __formData.append('teamId', params.teamId as string | Blob);
    }
    if (params.teamDomain != null) {
      __formData.append('teamDomain', params.teamDomain as string | Blob);
    }
    if (params.responseUrl != null) {
      __formData.append('responseUrl', params.responseUrl as string | Blob);
    }
    if (params.enterpriseName != null) {
      __formData.append(
        'enterpriseName',
        params.enterpriseName as string | Blob
      );
    }
    if (params.enterpriseId != null) {
      __formData.append('enterpriseId', params.enterpriseId as string | Blob);
    }
    if (params.command != null) {
      __formData.append('command', params.command as string | Blob);
    }
    if (params.channelName != null) {
      __formData.append('channelName', params.channelName as string | Blob);
    }
    if (params.channelId != null) {
      __formData.append('channelId', params.channelId as string | Blob);
    }
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/jokes/slack`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json',
      }
    );

    return this.http.request<any>(req).pipe(
      __filter((_r) => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SlackCommandResponse>;
      })
    );
  }
  /**
   * command
   * @param params The `SlackControllerService.CommandUsingPOSTParams` containing the following parameters:
   *
   * - `userName`:
   *
   * - `userId`:
   *
   * - `triggerId`:
   *
   * - `token`:
   *
   * - `text`:
   *
   * - `teamId`:
   *
   * - `teamDomain`:
   *
   * - `responseUrl`:
   *
   * - `enterpriseName`:
   *
   * - `enterpriseId`:
   *
   * - `command`:
   *
   * - `channelName`:
   *
   * - `channelId`:
   *
   * @return OK
   */
  commandUsingPOST(
    params: SlackControllerService.CommandUsingPOSTParams
  ): __Observable<SlackCommandResponse> {
    return this.commandUsingPOSTResponse(params).pipe(
      __map((_r) => _r.body as SlackCommandResponse)
    );
  }
}

module SlackControllerService {
  /**
   * Parameters for commandUsingPOST
   */
  export interface CommandUsingPOSTParams {
    userName?: string;
    userId?: string;
    triggerId?: string;
    token?: string;
    text?: string;
    teamId?: string;
    teamDomain?: string;
    responseUrl?: string;
    enterpriseName?: string;
    enterpriseId?: string;
    command?: string;
    channelName?: string;
    channelId?: string;
  }
}

export { SlackControllerService };
