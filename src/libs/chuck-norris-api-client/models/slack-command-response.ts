/* tslint:disable */
import { SlackCommandResponseAttachment } from './slack-command-response-attachment';
export interface SlackCommandResponse {
  attachments?: Array<SlackCommandResponseAttachment>;
  icon_url?: string;
  response_type?: string;
  text?: string;
}
