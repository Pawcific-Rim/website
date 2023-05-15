/* eslint-disable max-len */
import { NextPageContext } from 'next';
import { isClient } from './helper';

const defaultUA =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1';

const mobileUARegexp =
  /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/;

class Device {
  readonly ua: string;

  readonly mobile: boolean;

  constructor(ua: string) {
    this.ua = ua;
    this.mobile = mobileUARegexp.test(ua);
  }

  get pc(): boolean {
    return !this.mobile;
  }

  get safari(): boolean {
    return /safari/i.test(this.ua);
  }

  get chromeOnIos(): boolean {
    return /CriOS/i.test(this.ua);
  }

  get line(): boolean {
    return /line/i.test(this.ua);
  }

  get android(): boolean {
    return /android/i.test(this.ua);
  }
}

function fromUserAgent(ua: string): Device {
  return new Device(ua);
}

function fromNextContext(ctx: { req: NextPageContext['req'] | null }): Device {
  return fromUserAgent(isClient() ? navigator.userAgent : ctx.req?.headers['user-agent'] ?? defaultUA);
}

export { fromUserAgent, fromNextContext };
