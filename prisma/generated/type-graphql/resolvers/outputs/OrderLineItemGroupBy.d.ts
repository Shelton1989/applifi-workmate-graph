import { OrderLineItemCountAggregate } from "../outputs/OrderLineItemCountAggregate";
import { OrderLineItemMaxAggregate } from "../outputs/OrderLineItemMaxAggregate";
import { OrderLineItemMinAggregate } from "../outputs/OrderLineItemMinAggregate";
export declare class OrderLineItemGroupBy {
    id: string;
    details: string | null;
    comments: string | null;
    mealItemId: string | null;
    mealItemOptionId: string | null;
    bookingId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: OrderLineItemCountAggregate | null;
    _min: OrderLineItemMinAggregate | null;
    _max: OrderLineItemMaxAggregate | null;
}
