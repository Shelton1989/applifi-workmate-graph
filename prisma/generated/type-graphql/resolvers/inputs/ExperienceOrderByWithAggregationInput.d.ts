import { ExperienceAvgOrderByAggregateInput } from "../inputs/ExperienceAvgOrderByAggregateInput";
import { ExperienceCountOrderByAggregateInput } from "../inputs/ExperienceCountOrderByAggregateInput";
import { ExperienceMaxOrderByAggregateInput } from "../inputs/ExperienceMaxOrderByAggregateInput";
import { ExperienceMinOrderByAggregateInput } from "../inputs/ExperienceMinOrderByAggregateInput";
import { ExperienceSumOrderByAggregateInput } from "../inputs/ExperienceSumOrderByAggregateInput";
export declare class ExperienceOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    tenantId?: "asc" | "desc" | undefined;
    productLink?: "asc" | "desc" | undefined;
    stripeProductId?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    category?: "asc" | "desc" | undefined;
    photo?: "asc" | "desc" | undefined;
    gallery?: "asc" | "desc" | undefined;
    duration?: "asc" | "desc" | undefined;
    publishStatus?: "asc" | "desc" | undefined;
    likedByIds?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: ExperienceCountOrderByAggregateInput | undefined;
    _avg?: ExperienceAvgOrderByAggregateInput | undefined;
    _max?: ExperienceMaxOrderByAggregateInput | undefined;
    _min?: ExperienceMinOrderByAggregateInput | undefined;
    _sum?: ExperienceSumOrderByAggregateInput | undefined;
}
