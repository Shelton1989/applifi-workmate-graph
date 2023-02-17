import { BookingOrderCountOrderByAggregateInput } from "../inputs/BookingOrderCountOrderByAggregateInput";
import { BookingOrderMaxOrderByAggregateInput } from "../inputs/BookingOrderMaxOrderByAggregateInput";
import { BookingOrderMinOrderByAggregateInput } from "../inputs/BookingOrderMinOrderByAggregateInput";
export declare class BookingOrderOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    experienceId?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    buyerId?: "asc" | "desc" | undefined;
    tenantId?: "asc" | "desc" | undefined;
    PaymentStatus?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: BookingOrderCountOrderByAggregateInput | undefined;
    _max?: BookingOrderMaxOrderByAggregateInput | undefined;
    _min?: BookingOrderMinOrderByAggregateInput | undefined;
}
