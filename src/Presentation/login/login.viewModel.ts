import { ref } from "vue"
import { container } from 'tsyringe'
import LoginUseCase, { LoginParams } from "../../Domain/usecase/auth/login.usecase"
import AuthToken from "../../Domain/entity/token.entity"

const useLoginViewModel = () => {

    const loginUseCase = container.resolve(LoginUseCase)

    const user = ref({
        email: "",
        password: ""
    })

    // token
    const token = ref<AuthToken>({ token: "", refresh_token: "" });

    const login = async (e: Event) => {
        e.preventDefault()

        const params = new LoginParams(user.value.email, user.value.password)
        token.value = await loginUseCase.execute(params)
    }

    return { user, login, token }
}

export default useLoginViewModel