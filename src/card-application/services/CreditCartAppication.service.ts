import axios from '../../services/axios/axios.connect';
import { CreditCardApplicationInterface } from '../interfaces/card-application.interface'

export class CreditCardApplicationService {
    async create(creditCardApplication: CreditCardApplicationInterface) {
        return await axios.post(`/card-application`, creditCardApplication)
    }
}
