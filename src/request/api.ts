import request from "./index"

export const captchaApi = ():Promise<CaptchaAPIRes> =>request.get("/prod-api/captchaImage")
export const loginApi = (params:LoginAPIReq):Promise<LoginAPIRes> =>request.post("/prod-api/login",params)