import { ExperienceOrderByWithAggregationInput } from "../../../inputs/ExperienceOrderByWithAggregationInput";
import { ExperienceScalarWhereWithAggregatesInput } from "../../../inputs/ExperienceScalarWhereWithAggregatesInput";
import { ExperienceWhereInput } from "../../../inputs/ExperienceWhereInput";
export declare class GroupByExperienceArgs {
    where?: ExperienceWhereInput | undefined;
    orderBy?: ExperienceOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "tenantId" | "productLink" | "stripeProductId" | "title" | "description" | "category" | "photo" | "gallery" | "duration" | "publishStatus" | "likedByIds" | "createdAt" | "updatedAt">;
    having?: ExperienceScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
