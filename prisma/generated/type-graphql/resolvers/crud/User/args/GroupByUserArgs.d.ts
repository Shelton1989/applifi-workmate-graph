import { UserOrderByWithAggregationInput } from "../../../inputs/UserOrderByWithAggregationInput";
import { UserScalarWhereWithAggregatesInput } from "../../../inputs/UserScalarWhereWithAggregatesInput";
import { UserWhereInput } from "../../../inputs/UserWhereInput";
export declare class GroupByUserArgs {
    where?: UserWhereInput | undefined;
    orderBy?: UserOrderByWithAggregationInput[] | undefined;
    by: Array<"tenantId" | "uid" | "uuid" | "id" | "username" | "email" | "roles" | "firstName" | "lastName" | "avatar" | "coverImage" | "dateOfBirth" | "biography" | "hasAcceptedTerms" | "isFirstTimeUser" | "isVerified" | "isActive" | "mealIds" | "createdAt" | "updatedAt" | "wardId">;
    having?: UserScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
