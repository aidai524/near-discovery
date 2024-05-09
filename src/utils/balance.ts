import Big from 'big.js';

export function balanceFormated(balance?: string | number, digits = 4) {
  if (!balance) return '0';
  const _balance = new Big(balance);
  if (_balance.eq(0)) return '0';
  if (_balance.lt(1 / 10 ** digits)) return `<${1 / 10 ** digits}`;
  return _balance.toFixed(digits);
}

export function valueFormated(balance?: string, price?: string, digits = 2) {
  if (!balance || !price) return '0';
  const _balance = new Big(balance);
  const _price = new Big(price);
  if (_balance.eq(0) || _price.eq(0)) return '0';
  const total = _balance.mul(_price);
  if (total.lt(1 / 10 ** digits)) return `<${1 / 10 ** digits}`;
  return total.toFixed(digits);
}

export function balanceShortFormated(balance?: string | number, digits = 1) {
  if (!balance) return '0';
  const _balance = new Big(balance);
  if (_balance.eq(0)) return '0';
  if (_balance.lt(1 / 10 ** digits)) return `<${1 / 10 ** digits}`;
  if (_balance.lt(1e3)) return _balance.toFixed(digits);
  if (_balance.lt(1e6)) return _balance.div(1e3).toFixed(digits) + 'K';
  return _balance.div(1e6).toFixed(digits) + 'M';
}

export function percentFormated(value: string | number, needMul = false): string {
  return (Number(value) * (needMul ? 100 : 1)).toFixed(2) + "%"
}

const addressReg = /(\w{6})(.*)(\w{4})/
export function addressFormated(address: string) {
  if (!address) {
      return ''
  }
  return address.replace(addressReg, (_1: string, _2: string, _3: string, _4: string) => {
      return `${_2}...${_4}`
  })
}


export function timeDurationFormated(time: number) {
  return Math.floor((Date.now() - time) / 1000 / 60) + ' min ago'
}