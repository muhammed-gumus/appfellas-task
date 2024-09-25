export interface Flight {
    id: string;
    flightNumber: string;
    departureAirport: {
        code: string;
        name: string;
    };
    arrivalAirport: {
        code: string;
        name: string;
    };
    scheduleDate: string;
    scheduleTime: string;
    estimatedArrivalTime: string;
    flightDirection: string;
    airline: string;
    isConnecting: boolean;
    price: {
        economy: number;
        business: number;
    };
    estimatedDuration: string;
}
