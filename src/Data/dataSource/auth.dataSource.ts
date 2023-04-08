import type { IHttpClient } from "../../Core/httpClient";
import AuthTokenModel, { AuthTokenModelFactory } from "../model/token.model";
import { injectable, inject } from "tsyringe";

export interface IAuthDataSource {
    login(payload: any): Promise<AuthTokenModel>
}

@injectable()
export default class AuthDataSource implements IAuthDataSource {

    constructor(@inject("IHttpClient") private _httpClient: IHttpClient) {}

    async login(payload: any): Promise<AuthTokenModel> {
        const temp = {
            "token": "some_token",
            "refresh_token": "some_refresh_token"
        }
        return AuthTokenModelFactory.fromJson(temp)
    }
}