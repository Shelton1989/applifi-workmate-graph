import { Inventory } from "../models/Inventory";
import { OrderLineItem } from "../models/OrderLineItem";
import { Product } from "../models/Product";
import { ArtworkCount } from "../resolvers/outputs/ArtworkCount";
export declare class Artwork {
    id: string;
    title: string;
    description: string;
    caption: string;
    url: string;
    Products?: Product[];
    productIds: string[];
    Inventory?: Inventory;
    inventoryId: string;
    OrderLineItems?: OrderLineItem[];
    createdAt: Date;
    updatedAt: Date;
    _count?: ArtworkCount | null;
}
