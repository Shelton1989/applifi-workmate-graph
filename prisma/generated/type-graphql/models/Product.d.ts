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
    publishStatus: "DRAFT" | "PUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED";
    description?: string | null;
    price?: Price | null;
    priceId?: string | null;
    availableQuantity?: number | null;
    photo?: string | null;
    gallery: string[];
    BaseProduct?: BrandProduct | null;
    baseProductId?: string | null;
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
