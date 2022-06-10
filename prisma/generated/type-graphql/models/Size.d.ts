import { OrderLineItem } from "../models/OrderLineItem";
import { Product } from "../models/Product";
import { SizeCount } from "../resolvers/outputs/SizeCount";
export declare class Size {
    id: string;
    value: string;
    region: "US" | "UK" | "EU" | "UNIVERSAL";
    Products?: Product[];
    productIds: string[];
    OrderLineItems?: OrderLineItem[];
    createdAt: Date;
    updatedAt: Date;
    _count?: SizeCount | null;
}
