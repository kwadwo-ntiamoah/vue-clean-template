import { injectable, inject } from "tsyringe";
import AuthToken from "../../Domain/entity/token.entity";
import type IAuthRepository from "../../Domain/repository/auth.repository";
import type { IAuthDataSource } from "../dataSource/auth.dataSource";

@injectable()
export default class AuthRepository implements IAuthRepository {

    constructor(@inject("IAuthDataSource") private _authDataSource: IAuthDataSource) {}

    async login(payload: any): Promise<AuthToken> {
        return await this._authDataSource.login(payload)
    }
    
}