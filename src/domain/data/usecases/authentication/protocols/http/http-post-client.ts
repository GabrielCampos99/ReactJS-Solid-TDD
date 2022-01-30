/* eslint-disable @typescript-eslint/method-signature-style */
export interface HttpPostClient {
  post (url: string): Promise<void>
}
