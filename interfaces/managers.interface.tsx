import { IImage } from 'Interfaces';

export interface IManager {
    name: string,
    surname: string,
    email: string,
    phone: string,
    portrait: IImage
}