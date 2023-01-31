import { BookingOrderLineItemAvgOrderByAggregateInput } from "../inputs/BookingOrderLineItemAvgOrderByAggregateInput";
import { BookingOrderLineItemCountOrderByAggregateInput } from "../inputs/BookingOrderLineItemCountOrderByAggregateInput";
import { BookingOrderLineItemMaxOrderByAggregateInput } from "../inputs/BookingOrderLineItemMaxOrderByAggregateInput";
import { BookingOrderLineItemMinOrderByAggregateInput } from "../inputs/BookingOrderLineItemMinOrderByAggregateInput";
import { BookingOrderLineItemSumOrderByAggregateInput } from "../inputs/BookingOrderLineItemSumOrderByAggregateInput";
export declare class BookingOrderLineItemOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    details?: "asc" | "desc" | undefined;
    comments?: "asc" | "desc" | undefined;
    selectedQuantity?: "asc" | "desc" | undefined;
    selectedStartDate?: "asc" | "desc" | undefined;
    selectedEndDate?: "asc" | "desc" | undefined;
    priceId?: "asc" | "desc" | undefined;
    bookingId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: BookingOrderLineItemCountOrderByAggregateInput | undefined;
    _avg?: BookingOrderLineItemAvgOrderByAggregateInput | undefined;
    _max?: BookingOrderLineItemMaxOrderByAggregateInput | undefined;
    _min?: BookingOrderLineItemMinOrderByAggregateInput | undefined;
    _sum?: BookingOrderLineItemSumOrderByAggregateInput | undefined;
}
