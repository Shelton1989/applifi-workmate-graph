import { UserOrderByWithAggregationInput } from "../../../inputs/UserOrderByWithAggregationInput";
import { UserScalarWhereWithAggregatesInput } from "../../../inputs/UserScalarWhereWithAggregatesInput";
import { UserWhereInput } from "../../../inputs/UserWhereInput";
export declare class GroupByUserArgs {
    where?: UserWhereInput | undefined;
    orderBy?: UserOrderByWithAggregationInput[] | undefined;
    by: Array<"uid" | "id" | "username" | "email" | "roles" | "firstName" | "lastName" | "avatar" | "coverImage" | "dateOfBirth" | "hasAcceptedTerms" | "isFirstTimeUser" | "followingIds" | "followerIds" | "productIds" | "createdAt" | "updatedAt">;
    having?: UserScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}