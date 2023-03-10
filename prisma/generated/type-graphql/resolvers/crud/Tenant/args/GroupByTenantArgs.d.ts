import { TenantOrderByWithAggregationInput } from "../../../inputs/TenantOrderByWithAggregationInput";
import { TenantScalarWhereWithAggregatesInput } from "../../../inputs/TenantScalarWhereWithAggregatesInput";
import { TenantWhereInput } from "../../../inputs/TenantWhereInput";
export declare class GroupByTenantArgs {
    where?: TenantWhereInput | undefined;
    orderBy?: TenantOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "slug" | "description" | "logoImage" | "avatar" | "coverImage" | "MealImages" | "acceptedUserEmailDomains" | "createdAt" | "updatedAt">;
    having?: TenantScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
