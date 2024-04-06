export class User{
  name!: string;
  mobNumber!: string;
  age!: number;
  dob!: string;
  email!: string;
  password!: string;
  uploadPhoto!:string;
  gender!:string;
  language!:string;
  agreetc!:boolean;
  aboutYou!:string
  address!:Address;
}

export class Address {
    id!:number;
    addLine1!: string;
    addLine2!: string;
    city!: string;
    state!: string;
    zipCode!: string;
  }

  export class Product{
    id!: number;
    name!: string;
    uploadPhoto!: string;
    productDesc!: string;
    mrp!: string;
    dp!: string;
    status!: string;
  }

  export class Order {
    id!: number;
    userId!: number;
    sellerId!: number;
    product!: Product;
    deliveryAddress!:Address;
    contact!:number;
    dateTime!:string
  }
  