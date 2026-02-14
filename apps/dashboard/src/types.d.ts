import type { IncomingRequest } from '@org/jssip-snapshot/src/SIPMessage';

declare module '@org/jssip-snapshot';

declare module '@org/jssip-snapshot/src/RTCSession' {
  export interface RTCSession {
    _contact: string;
    _request: IncomingRequest;
  }
}

declare module '@org/jssip-snapshot/src/SIPMessage' {
  export interface IncomingRequest {
    call_id: string;
    data: string;
    cseq: number;
  }
}
