declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.styl";

// @ts-ignore
declare const process: {
  env: {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd';
    [key: string]: any;
  }
}

declare const JWTJSON: boolean;
declare const APPID: string;
declare const KEYID: string;
declare const COMPANYID: string;
declare const PUBLICKEY: string;
declare const APIHOST: string;
declare const UPLOADHOST: string;
declare const AMAPKEY: string;
declare const WXAPPID: string;