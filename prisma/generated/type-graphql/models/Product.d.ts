import { Artwork } from "../models/Artwork";
import { BrandProduct } from "../models/BrandProduct";
import { Color } from "../models/Color";
import { Inventory } from "../models/Inventory";
import { OrderLineItem } from "../models/OrderLineItem";
import { Price } from "../models/Price";
import { Size } from "../models/Size";
import { User } from "../models/User";
import { ProductCount } from "../resolvers/outputs/ProductCount";
export declare class Product {
    id: string;
    description: string;
    price?: Price;
    priceId: string;
    availableQuantity: number;
    photo: string;
    gallery: string[];
    BaseProduct?: BrandProduct;
    baseProductId: string;
    Artwork?: Artwork[];
    artworkIds: string[];
    Colors?: Color[];
    colorIds: string[];
    Sizes?: Size[];
    sizeIds: string[];
    OrderLineItems?: OrderLineItem[];
    LikedBy?: User[];
    likedByIds: string[];
    Inventory?: Inventory;
    inventoryId: string;
    createdAt: Date;
    updatedAt: Date;
    _count?: ProductCount | null;
}
