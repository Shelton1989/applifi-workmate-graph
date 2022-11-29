import { TopicListsOrderByWithAggregationInput } from "../../../inputs/TopicListsOrderByWithAggregationInput";
import { TopicListsScalarWhereWithAggregatesInput } from "../../../inputs/TopicListsScalarWhereWithAggregatesInput";
import { TopicListsWhereInput } from "../../../inputs/TopicListsWhereInput";
export declare class GroupByTopicListsArgs {
    where?: TopicListsWhereInput | undefined;
    orderBy?: TopicListsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "type" | "title" | "lists" | "createdAt" | "updatedAt">;
    having?: TopicListsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
