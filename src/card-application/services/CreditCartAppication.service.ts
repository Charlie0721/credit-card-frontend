import axios from '../../services/axios/axios.connect';
import { CreditCardApplicationInterface, CreditCardApplicationCheckStatusInterface } from '../interfaces/card-application.interface'

export class CreditCardApplicationService {
    async create(creditCardApplication: CreditCardApplicationInterface) {
        return await axios.post(`/card-application`, creditCardApplication)
    }

    async check(userId: number, checkStatus: CreditCardApplicationCheckStatusInterface) {
        return await axios.post(`/card-application/request/${userId}`, checkStatus)
    }

}
