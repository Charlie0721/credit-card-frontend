import { defineStore } from "pinia";
import { LoginService } from '../services/login.service'
import { ILogin } from '../interfaces/login.interface'
const loginService = new LoginService();

export const useLoginStore = defineStore('loginStore', {

    state: () => {
        return {
            login: {} as ILogin,
            errorData: [] as any
        }

    },
    actions: {
        async loginUser(login: ILogin) {
            try {
                this.login = login
                const response = await loginService.loginUser(this.login)
                if (response.data.message === "No se encontro usuario en la base de datos") {
                    this.errorData = response.data.message
                    return this.errorData
                } else {
                    return response
                }
            } catch (error: any) {
                console.log("error", error)

            }
        }
    }

})



