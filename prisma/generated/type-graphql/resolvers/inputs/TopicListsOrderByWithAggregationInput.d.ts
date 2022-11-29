import { TopicListsAvgOrderByAggregateInput } from "../inputs/TopicListsAvgOrderByAggregateInput";
import { TopicListsCountOrderByAggregateInput } from "../inputs/TopicListsCountOrderByAggregateInput";
import { TopicListsMaxOrderByAggregateInput } from "../inputs/TopicListsMaxOrderByAggregateInput";
import { TopicListsMinOrderByAggregateInput } from "../inputs/TopicListsMinOrderByAggregateInput";
import { TopicListsSumOrderByAggregateInput } from "../inputs/TopicListsSumOrderByAggregateInput";
export declare class TopicListsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    lists?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: TopicListsCountOrderByAggregateInput | undefined;
    _avg?: TopicListsAvgOrderByAggregateInput | undefined;
    _max?: TopicListsMaxOrderByAggregateInput | undefined;
    _min?: TopicListsMinOrderByAggregateInput | undefined;
    _sum?: TopicListsSumOrderByAggregateInput | undefined;
}
