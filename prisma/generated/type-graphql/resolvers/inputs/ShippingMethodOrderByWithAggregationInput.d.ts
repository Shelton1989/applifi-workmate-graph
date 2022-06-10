import { ShippingMethodAvgOrderByAggregateInput } from "../inputs/ShippingMethodAvgOrderByAggregateInput";
import { ShippingMethodCountOrderByAggregateInput } from "../inputs/ShippingMethodCountOrderByAggregateInput";
import { ShippingMethodMaxOrderByAggregateInput } from "../inputs/ShippingMethodMaxOrderByAggregateInput";
import { ShippingMethodMinOrderByAggregateInput } from "../inputs/ShippingMethodMinOrderByAggregateInput";
import { ShippingMethodSumOrderByAggregateInput } from "../inputs/ShippingMethodSumOrderByAggregateInput";
export declare class ShippingMethodOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    label?: "asc" | "desc" | undefined;
    arrivalTimeInBusinessDays?: "asc" | "desc" | undefined;
    arrivalTimeInBusinessDaysRang?: "asc" | "desc" | undefined;
    arrivalTimeDescription?: "asc" | "desc" | undefined;
    priceId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: ShippingMethodCountOrderByAggregateInput | undefined;
    _avg?: ShippingMethodAvgOrderByAggregateInput | undefined;
    _max?: ShippingMethodMaxOrderByAggregateInput | undefined;
    _min?: ShippingMethodMinOrderByAggregateInput | undefined;
    _sum?: ShippingMethodSumOrderByAggregateInput | undefined;
}
