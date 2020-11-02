import { LoginModel } from './LoginModel';

export interface RegisterModel extends LoginModel {
    isPasswordKeptAsHash: boolean;
}