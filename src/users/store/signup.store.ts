import { defineStore } from 'pinia';
import { SignupService } from '../services/signup.service'
import { ISignup, ISignupUser, IUpdateUser } from '../interfaces/signup.interface'

const signupService = new SignupService()

export const useSignupStore = defineStore('signupStore', {

    state: () => {
        return {
            user: {} as ISignup,
            allUsers: [] as Array<ISignupUser>,
            oneUser: {} as IUpdateUser
        }
    },
    actions: {
        async signup(user: ISignup) {
            this.user = user
            const responseUser = await signupService.signup(this.user)
            return responseUser
        },
        async getAll() {
            const responseUsers = await signupService.getAll()
            this.allUsers = responseUsers.data
            return this.allUsers
        },
        async getOne(userId: number) {
            const response = await signupService.getOne(userId);
            this.oneUser = response.data;
            return this.oneUser;
        },

        async update(userId: number, data: IUpdateUser) {
            const response = await signupService.update(userId, data);
            return response
        },
        async delete(userId: number) {
            const response=await signupService.delete(userId);
            return response
        }
    }

})