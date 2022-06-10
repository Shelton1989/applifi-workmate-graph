import { Order } from "../models/Order";
import { User } from "../models/User";
import { AddressCount } from "../resolvers/outputs/AddressCount";
export declare class Address {
    id: string;
    type: "BILLING" | "DELIVERY" | "PHYSICAL" | "POSTAL";
    line1: string;
    line2: string;
    city: string;
    district: string;
    country: string;
    code: string;
    isDefault: boolean;
    User?: User | null;
    userId?: string | null;
    Orders?: Order[];
    createdAt: Date;
    updatedAt: Date;
    _count?: AddressCount | null;
}
