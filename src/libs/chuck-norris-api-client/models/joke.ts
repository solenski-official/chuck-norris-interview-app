/* tslint:disable */
export interface Joke {

  /**
   * MailingList of categories.
   */
  categories?: Array<string>;

  /**
   * Timestamp when the joke was created.
   */
  created_at?: string;

  /**
   * Absolute URL of the Chuck Norris icon.
   */
  icon_url?: string;

  /**
   * URL-safe Base64-encoded UUID for a joke.
   */
  id?: string;

  /**
   * Timestamp when the joke was updated.
   */
  updated_at?: string;

  /**
   * Absolute URL of the joke.
   */
  url?: string;

  /**
   * The contents of an incredible funny joke.
   */
  value: string;
}
