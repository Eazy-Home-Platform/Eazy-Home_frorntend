import { stringifyUrl } from "query-string/base";

interface ILinks {
    name: string;
    linking_url: string;
    index: number;
}

export const linksArr: ILinks[] = [{
    name: 'Home',
    linking_url: '/',
    index: 1
}, {
    name: 'Properties',
    linking_url: '/properties',
    index: 2
}, {
    name: 'Wishlist',
    linking_url: '/wishlist',
    index: 3
}, {
    name: 'Sign In/Up',
    linking_url: '/auth/register',
    index: 4
}]

interface IUser {
    id?: string;
    name: string;
    email: string;
    password: string;
    phone_number: number;
    dob: string;
    [key: string]: any;
}

export const IUserImpl: IUser = {
    name: 'Manzi Cedrick',
    email: 'cedrickmanzii0@gmail.com',
    password: 'manzi2005k',
    phone_number: 780918379,
    dob:'12/05/2004'
}