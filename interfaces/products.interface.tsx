import { IImage } from 'Interfaces';

export interface IProduct {
    name: string,
    price: number,
    cover: IImage,
    sizes: {
        name: string
    }
}