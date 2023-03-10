import { LocationAvgOrderByAggregateInput } from "../inputs/LocationAvgOrderByAggregateInput";
import { LocationCountOrderByAggregateInput } from "../inputs/LocationCountOrderByAggregateInput";
import { LocationMaxOrderByAggregateInput } from "../inputs/LocationMaxOrderByAggregateInput";
import { LocationMinOrderByAggregateInput } from "../inputs/LocationMinOrderByAggregateInput";
import { LocationSumOrderByAggregateInput } from "../inputs/LocationSumOrderByAggregateInput";
export declare class LocationOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    longitude?: "asc" | "desc" | undefined;
    latitude?: "asc" | "desc" | undefined;
    googleMapsUrl?: "asc" | "desc" | undefined;
    googlePlacesId?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    line1?: "asc" | "desc" | undefined;
    line2?: "asc" | "desc" | undefined;
    city?: "asc" | "desc" | undefined;
    district?: "asc" | "desc" | undefined;
    country?: "asc" | "desc" | undefined;
    code?: "asc" | "desc" | undefined;
    isDefault?: "asc" | "desc" | undefined;
    tenantId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: LocationCountOrderByAggregateInput | undefined;
    _avg?: LocationAvgOrderByAggregateInput | undefined;
    _max?: LocationMaxOrderByAggregateInput | undefined;
    _min?: LocationMinOrderByAggregateInput | undefined;
    _sum?: LocationSumOrderByAggregateInput | undefined;
}
