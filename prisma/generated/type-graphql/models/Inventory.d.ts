import { Artwork } from "../models/Artwork";
import { Product } from "../models/Product";
import { User } from "../models/User";
import { InventoryCount } from "../resolvers/outputs/InventoryCount";
export declare class Inventory {
    id: string;
    Products?: Product[];
    Artwork?: Artwork[];
    User?: User;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    _count?: InventoryCount | null;
}
