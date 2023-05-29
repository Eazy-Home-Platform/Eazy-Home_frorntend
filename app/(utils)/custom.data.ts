import { v4 as uuidv4 } from 'uuid';


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
    dob: '12/05/2004'
}
enum TicketStatus {
    ACTIVE,
    PENDING,
    INACTIVE
}

export interface ITicket {
    id?: string;
    flight_company: string;
    departure: string;
    arrival: string;
    departure_time: string;
    arrival_time: string;
    issued_date: Date;
    timezone: string;
    gate_station: string;
    seat_number: string;
    status: TicketStatus;
}

export const TicketsArr: ITicket[] = [
{
    id: uuidv4(),
    flight_company: '',
    departure: 'New-york',
    arrival: 'China-downtown',
    departure_time: '03:20 AM',
    arrival_time: '19:20 PM',
    issued_date: new Date(),
    timezone: 'CAT',
    gate_station: 'A34S',
    seat_number: '128',
    status: TicketStatus.ACTIVE
},
{
    id: uuidv4(),
    departure: 'Seattle',
    flight_company: '',
    arrival: 'New-York',
    departure_time: '13:20 AM',
    arrival_time: '16:20 PM',
    issued_date: new Date(),
    timezone: 'EST',
    gate_station: 'A38S',
    seat_number: '198',
    status: TicketStatus.ACTIVE
},
{
    id: uuidv4(),
    departure: 'MACAU',
    flight_company: '',
    arrival: 'BEIJING',
    departure_time: '18:20 AM',
    arrival_time: '20:20 PM',
    issued_date: new Date(),
    timezone: 'GMT+6',
    gate_station: 'B14S',
    seat_number: '788',
    status: TicketStatus.ACTIVE
},
]