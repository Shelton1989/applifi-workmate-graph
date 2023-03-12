import { AggregateRatingOrderByWithRelationInput } from "../inputs/AggregateRatingOrderByWithRelationInput";
import { FeaturesOrderByRelationAggregateInput } from "../inputs/FeaturesOrderByRelationAggregateInput";
import { MealAvailabilityOrderByRelationAggregateInput } from "../inputs/MealAvailabilityOrderByRelationAggregateInput";
import { MealItemOrderByRelationAggregateInput } from "../inputs/MealItemOrderByRelationAggregateInput";
import { OrderOrderByRelationAggregateInput } from "../inputs/OrderOrderByRelationAggregateInput";
import { PostOrderByRelationAggregateInput } from "../inputs/PostOrderByRelationAggregateInput";
import { ReactionOrderByRelationAggregateInput } from "../inputs/ReactionOrderByRelationAggregateInput";
import { TenantOrderByWithRelationInput } from "../inputs/TenantOrderByWithRelationInput";
import { UserOrderByRelationAggregateInput } from "../inputs/UserOrderByRelationAggregateInput";
export declare class MealOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    Tenant?: TenantOrderByWithRelationInput | undefined;
    tenantId?: "asc" | "desc" | undefined;
    productLink?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    dietaryRestrictions?: "asc" | "desc" | undefined;
    allowedMealTypes?: "asc" | "desc" | undefined;
    allowedMealKinds?: "asc" | "desc" | undefined;
    doctorSpecificDiets?: "asc" | "desc" | undefined;
    specialDiets?: "asc" | "desc" | undefined;
    Items?: MealItemOrderByRelationAggregateInput | undefined;
    itemIds?: "asc" | "desc" | undefined;
    Availability?: MealAvailabilityOrderByRelationAggregateInput | undefined;
    Orders?: OrderOrderByRelationAggregateInput | undefined;
    photo?: "asc" | "desc" | undefined;
    gallery?: "asc" | "desc" | undefined;
    AggregateRating?: AggregateRatingOrderByWithRelationInput | undefined;
    publishStatus?: "asc" | "desc" | undefined;
    LikedBy?: UserOrderByRelationAggregateInput | undefined;
    likedByIds?: "asc" | "desc" | undefined;
    Posts?: PostOrderByRelationAggregateInput | undefined;
    Features?: FeaturesOrderByRelationAggregateInput | undefined;
    Reactions?: ReactionOrderByRelationAggregateInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}