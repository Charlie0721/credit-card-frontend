import { defineStore } from "pinia";
import { CreditCardApplicationInterface, CreditCardApplicationCheckStatusInterface } from '../interfaces/card-application.interface'
import { CreditCardApplicationService } from '../services/CreditCartAppication.service'

const creditCardApplicationService = new CreditCardApplicationService()

export const useCreditCardApplicationStore = defineStore('creditCardApplicationStore', {

    state: () => {
        return {
            cardAppication: {} as CreditCardApplicationInterface,
            checkStatus: {} as CreditCardApplicationCheckStatusInterface

        }
    },
    actions: {
        async createApplication(application: CreditCardApplicationInterface) {
            this.cardAppication = application
            try {
                const response = await creditCardApplicationService.create(this.cardAppication)
                return response

            } catch (error) {
                console.log(error);
            }
        },
        async check(userId: number, status: CreditCardApplicationCheckStatusInterface) {

            try {
                const response = await creditCardApplicationService.check(userId, status);
                return response
            } catch (error) {
                console.log(error);
            }

        }

    }

})