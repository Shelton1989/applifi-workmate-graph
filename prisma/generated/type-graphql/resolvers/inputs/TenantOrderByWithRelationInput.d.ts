import { BookingOrderOrderByRelationAggregateInput } from "../inputs/BookingOrderOrderByRelationAggregateInput";
import { ExperienceOrderByRelationAggregateInput } from "../inputs/ExperienceOrderByRelationAggregateInput";
import { LocationOrderByRelationAggregateInput } from "../inputs/LocationOrderByRelationAggregateInput";
import { UserOrderByRelationAggregateInput } from "../inputs/UserOrderByRelationAggregateInput";
export declare class TenantOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    slug?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    logoImage?: "asc" | "desc" | undefined;
    avatar?: "asc" | "desc" | undefined;
    coverImage?: "asc" | "desc" | undefined;
    experienceImages?: "asc" | "desc" | undefined;
    Users?: UserOrderByRelationAggregateInput | undefined;
    Experiences?: ExperienceOrderByRelationAggregateInput | undefined;
    BookingOrders?: BookingOrderOrderByRelationAggregateInput | undefined;
    Locations?: LocationOrderByRelationAggregateInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
