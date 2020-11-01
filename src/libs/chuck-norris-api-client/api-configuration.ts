/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  // TODO Change swagger generation command to use this api url
  rootUrl: string = 'https://api.chucknorris.io';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
