import { Artwork } from "../../../models/Artwork";
import { Color } from "../../../models/Color";
import { Order } from "../../../models/Order";
import { OrderLineItem } from "../../../models/OrderLineItem";
import { Price } from "../../../models/Price";
import { Product } from "../../../models/Product";
import { Size } from "../../../models/Size";
export declare class OrderLineItemRelationsResolver {
    lineItemPrice(orderLineItem: OrderLineItem, ctx: any): Promise<Price>;
    SelectedProduct(orderLineItem: OrderLineItem, ctx: any): Promise<Product>;
    SelectedColor(orderLineItem: OrderLineItem, ctx: any): Promise<Color>;
    SelectedArtwork(orderLineItem: OrderLineItem, ctx: any): Promise<Artwork>;
    SelectedSize(orderLineItem: OrderLineItem, ctx: any): Promise<Size>;
    Order(orderLineItem: OrderLineItem, ctx: any): Promise<Order>;
}
