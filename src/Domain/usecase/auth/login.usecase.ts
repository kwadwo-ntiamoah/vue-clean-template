import { inject, injectable } from "tsyringe";
import IUseCase from "../../../Core/usecase";
import AuthToken from "../../entity/token.entity";
import type IAuthRepository from "../../repository/auth.repository";

@injectable()
export default class LoginUseCase implements IUseCase<AuthToken, LoginParams> {

    constructor(@inject("IAuthRepository") private _authRepository: IAuthRepository) {}

    async execute(params: LoginParams): Promise<AuthToken> {
        return await this._authRepository.login(params.toJson());
    }
    
}

export class LoginParams {
    constructor(
        public username: string,
        public password: string
    ) {}

    toJson() {
        return {
            username: this.username,
            password: this.password
        }
    }
}