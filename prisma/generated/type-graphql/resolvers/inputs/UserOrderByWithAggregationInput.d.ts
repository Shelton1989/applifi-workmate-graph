import { UserCountOrderByAggregateInput } from "../inputs/UserCountOrderByAggregateInput";
import { UserMaxOrderByAggregateInput } from "../inputs/UserMaxOrderByAggregateInput";
import { UserMinOrderByAggregateInput } from "../inputs/UserMinOrderByAggregateInput";
export declare class UserOrderByWithAggregationInput {
    uid?: "asc" | "desc" | undefined;
    id?: "asc" | "desc" | undefined;
    username?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    roles?: "asc" | "desc" | undefined;
    firstName?: "asc" | "desc" | undefined;
    lastName?: "asc" | "desc" | undefined;
    avatar?: "asc" | "desc" | undefined;
    coverImage?: "asc" | "desc" | undefined;
    dateOfBirth?: "asc" | "desc" | undefined;
    hasAcceptedTerms?: "asc" | "desc" | undefined;
    isFirstTimeUser?: "asc" | "desc" | undefined;
    followingIds?: "asc" | "desc" | undefined;
    followerIds?: "asc" | "desc" | undefined;
    productIds?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: UserCountOrderByAggregateInput | undefined;
    _max?: UserMaxOrderByAggregateInput | undefined;
    _min?: UserMinOrderByAggregateInput | undefined;
}