import axios from '../../services/axios/axios.connect';
import { ILogin } from '../interfaces/login.interface'

export class LoginService {
    async loginUser(login: ILogin) {
        return await axios.post(`/users/login`, login)
    }
}