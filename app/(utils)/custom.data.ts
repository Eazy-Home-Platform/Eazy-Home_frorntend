import { stringifyUrl } from "query-string/base";

interface ILinks {
    name: string;
    linking_url: string;
    index: number;
}

export const linksArr : ILinks[] = [{
    name: 'Home',
    linking_url: '/',
    index:1
},{
    name: 'Properties',
    linking_url: '/properties',
    index: 2
},{
    name: 'Wishlist',
    linking_url: '/wishlist',
    index: 3
},{
    name: 'Sign In/Up',
    linking_url: '/auth/register',
    index: 4
}]