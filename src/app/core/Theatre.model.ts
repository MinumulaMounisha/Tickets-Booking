export interface Location {
    lat: number;
    lng: number;
    address: string;
}

export interface Seat {
    label: string;
    price: number;
}

export interface Theater {
    id: number;
    movie: string;
    name: string;
    timings: string;
    services: string[];
    location: Location;
    rate: number;
    stars: number;
    images: string[];
    email: string;
    seats: Seat[];
    availability: number;
}

export interface Cart {
    id: number,
    theater: Theater,
    seats: Seat
}

export interface Booking {
    
    id: number,
    theater: Theater,
    seats: Seat
}
/* export interface FilterDate {
    date: string;
    day: string;
  } */