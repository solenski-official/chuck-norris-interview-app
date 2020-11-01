/* tslint:disable */
import { AtomicInteger } from './atomic-integer';
import { AtomicDouble } from './atomic-double';
export interface MailingListStatistic {
  avg_sub_rate?: AtomicInteger;
  avg_unsub_rate?: AtomicInteger;
  campaign_count?: AtomicInteger;
  campaign_last_sent?: string;
  cleaned_count?: AtomicInteger;
  cleaned_count_since_send?: AtomicInteger;
  click_rate?: AtomicDouble;
  last_sub_date?: string;
  last_unsub_date?: string;
  member_count?: AtomicInteger;
  member_count_since_send?: AtomicInteger;
  merge_field_count?: AtomicInteger;
  open_rate?: AtomicDouble;
  target_sub_rate?: AtomicInteger;
  unsubscribe_count?: AtomicInteger;
  unsubscribe_count_since_send?: AtomicInteger;
}
