import { OrderLineItem } from "../models/OrderLineItem";
import { Product } from "../models/Product";
import { ColorCount } from "../resolvers/outputs/ColorCount";
export declare class Color {
    id: string;
    name: string;
    hex: string;
    Products?: Product[];
    productIds: string[];
    OrderLineItems?: OrderLineItem[];
    createdAt: Date;
    updatedAt: Date;
    _count?: ColorCount | null;
}
