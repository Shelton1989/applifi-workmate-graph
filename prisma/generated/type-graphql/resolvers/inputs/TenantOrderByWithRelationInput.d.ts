import { LocationOrderByRelationAggregateInput } from "../inputs/LocationOrderByRelationAggregateInput";
import { MealOrderByRelationAggregateInput } from "../inputs/MealOrderByRelationAggregateInput";
import { OrderOrderByRelationAggregateInput } from "../inputs/OrderOrderByRelationAggregateInput";
import { UserOrderByRelationAggregateInput } from "../inputs/UserOrderByRelationAggregateInput";
export declare class TenantOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    slug?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    logoImage?: "asc" | "desc" | undefined;
    avatar?: "asc" | "desc" | undefined;
    coverImage?: "asc" | "desc" | undefined;
    MealImages?: "asc" | "desc" | undefined;
    Users?: UserOrderByRelationAggregateInput | undefined;
    Meals?: MealOrderByRelationAggregateInput | undefined;
    Orders?: OrderOrderByRelationAggregateInput | undefined;
    Locations?: LocationOrderByRelationAggregateInput | undefined;
    acceptedUserEmailDomains?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
