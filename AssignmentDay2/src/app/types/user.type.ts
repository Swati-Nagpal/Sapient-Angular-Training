export type User = {
    id: number;
    name: string;
    email: string;
    address: {
        street: string,
        city: string,
        zipcode: string
    };
    company: {
        name: string,
        tagLine: string
    };
}