import AuthToken from "../entity/token.entity"

export default interface IAuthRepository {
    login(payload: any): Promise<AuthToken>
}