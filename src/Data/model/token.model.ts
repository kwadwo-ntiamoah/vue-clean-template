import AuthToken from "../../Domain/entity/token.entity"

export default class AuthTokenModel extends AuthToken {
    constructor(
        public token: string,
        public refresh_token: string
    ) {
        super(token, refresh_token)
    }

    toJson() {
        const json = {
            token: this.token,
            refresh_token: this.refresh_token
        }

        return json
    }
}

export class AuthTokenModelFactory {
    static fromJson(json: any): AuthTokenModel {
        return new AuthTokenModel(json["token"], json["refresh_token"]);
    }
}