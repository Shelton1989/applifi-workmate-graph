import { Artwork } from "../models/Artwork";
import { Color } from "../models/Color";
import { Order } from "../models/Order";
import { Price } from "../models/Price";
import { Product } from "../models/Product";
import { Size } from "../models/Size";
export declare class OrderLineItem {
    id: string;
    lineItemPrice?: Price;
    priceId: string;
    SelectedProduct?: Product;
    selectedProductId: string;
    SelectedColor?: Color;
    selectedColorId: string;
    SelectedArtwork?: Artwork;
    selectedArtworkId: string;
    SelectedSize?: Size;
    selectedSizeId: string;
    Order?: Order;
    orderId: string;
    createdAt: Date;
    updatedAt: Date;
}
