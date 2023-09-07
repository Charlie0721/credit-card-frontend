import { defineStore } from 'pinia';
import { SignupService } from '../services/signup.service'
import { ISignup,ISignupUser } from '../interfaces/signup.interface'

const signupService = new SignupService()

export const useSignupStore = defineStore('signupStore', {

    state: () => {
        return {
            user: {} as ISignup,
            allUsers: [] as Array<ISignupUser>
        }
    },
    actions: {
        async signup(user: ISignup) {
            this.user = user
            const responseUser = await signupService.signup(this.user)
            return responseUser
        },
        async getAll(){
            const responseUsers= await signupService.getAll()
            this.allUsers=responseUsers.data
            return this.allUsers
        }


    }

})