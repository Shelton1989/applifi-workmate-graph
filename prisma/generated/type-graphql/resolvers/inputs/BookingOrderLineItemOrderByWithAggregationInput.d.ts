import { BookingOrderLineItemCountOrderByAggregateInput } from "../inputs/BookingOrderLineItemCountOrderByAggregateInput";
import { BookingOrderLineItemMaxOrderByAggregateInput } from "../inputs/BookingOrderLineItemMaxOrderByAggregateInput";
import { BookingOrderLineItemMinOrderByAggregateInput } from "../inputs/BookingOrderLineItemMinOrderByAggregateInput";
export declare class BookingOrderLineItemOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    priceId?: "asc" | "desc" | undefined;
    bookingId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: BookingOrderLineItemCountOrderByAggregateInput | undefined;
    _max?: BookingOrderLineItemMaxOrderByAggregateInput | undefined;
    _min?: BookingOrderLineItemMinOrderByAggregateInput | undefined;
}
