import { AddressCountOrderByAggregateInput } from "../inputs/AddressCountOrderByAggregateInput";
import { AddressMaxOrderByAggregateInput } from "../inputs/AddressMaxOrderByAggregateInput";
import { AddressMinOrderByAggregateInput } from "../inputs/AddressMinOrderByAggregateInput";
export declare class AddressOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    line1?: "asc" | "desc" | undefined;
    line2?: "asc" | "desc" | undefined;
    city?: "asc" | "desc" | undefined;
    district?: "asc" | "desc" | undefined;
    country?: "asc" | "desc" | undefined;
    code?: "asc" | "desc" | undefined;
    isDefault?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: AddressCountOrderByAggregateInput | undefined;
    _max?: AddressMaxOrderByAggregateInput | undefined;
    _min?: AddressMinOrderByAggregateInput | undefined;
}
