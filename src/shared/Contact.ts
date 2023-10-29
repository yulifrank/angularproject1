export class Contact {
    name !: string;
    address!: string;
    houseNumber!: number;
    phone!: string;
    email!: string;
    image!: string;

    /**
     *
     */
    constructor(name: string, address: string,
        houseNumber: number,
        phone: string,
        email: string,
        image: string) {
        this.name = name;
        this.address = address;
        this.houseNumber = houseNumber;
        this.phone = phone;
        this.email = email;
        this.image = image;
    }
}