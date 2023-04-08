export default class AuthToken {
    constructor(
        public token: string,
        public refresh_token: string
    ) {}
}