import { OrderCountOrderByAggregateInput } from "../inputs/OrderCountOrderByAggregateInput";
import { OrderMaxOrderByAggregateInput } from "../inputs/OrderMaxOrderByAggregateInput";
import { OrderMinOrderByAggregateInput } from "../inputs/OrderMinOrderByAggregateInput";
export declare class OrderOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    selectedShippingAddressId?: "asc" | "desc" | undefined;
    selectedShippingMethodId?: "asc" | "desc" | undefined;
    SelectedPaymentType?: "asc" | "desc" | undefined;
    stripePaymentReference?: "asc" | "desc" | undefined;
    buyerId?: "asc" | "desc" | undefined;
    sellerId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: OrderCountOrderByAggregateInput | undefined;
    _max?: OrderMaxOrderByAggregateInput | undefined;
    _min?: OrderMinOrderByAggregateInput | undefined;
}
