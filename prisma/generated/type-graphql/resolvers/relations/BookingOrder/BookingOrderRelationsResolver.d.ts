import { BookingOrder } from "../../../models/BookingOrder";
import { BookingOrderLineItem } from "../../../models/BookingOrderLineItem";
import { Experience } from "../../../models/Experience";
import { Tenant } from "../../../models/Tenant";
import { User } from "../../../models/User";
import { BookingOrderItemsArgs } from "./args/BookingOrderItemsArgs";
export declare class BookingOrderRelationsResolver {
    Experience(bookingOrder: BookingOrder, ctx: any): Promise<Experience>;
    Buyer(bookingOrder: BookingOrder, ctx: any): Promise<User>;
    Tenant(bookingOrder: BookingOrder, ctx: any): Promise<Tenant>;
    Items(bookingOrder: BookingOrder, ctx: any, args: BookingOrderItemsArgs): Promise<BookingOrderLineItem[]>;
}
