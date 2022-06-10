import { Order } from "../models/Order";
import { Price } from "../models/Price";
import { ShippingMethodCount } from "../resolvers/outputs/ShippingMethodCount";
export declare class ShippingMethod {
    id: string;
    name: string;
    description: string;
    label: string;
    arrivalTimeInBusinessDays: number;
    arrivalTimeInBusinessDaysRang: string;
    arrivalTimeDescription: string;
    price?: Price;
    priceId: string;
    Orders?: Order[];
    createdAt: Date;
    updatedAt: Date;
    _count?: ShippingMethodCount | null;
}
