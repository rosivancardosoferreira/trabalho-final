export const BASE_API = "http://192.168.0.13:3333"

export const CHECK_EMAIL = "/user/check-email";
export const REGISTER_USER = "/user";
export const LOGIN_USER = "/user/login";
export const REGISTER_ITEM = "/item";
export const GET_ITEMS = (id: string) => "item/my_items/" + id;
export const VALIDATE_CODE = "/user/active-account";