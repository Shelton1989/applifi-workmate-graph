import { TopicListsOrderByWithRelationInput } from "../../../inputs/TopicListsOrderByWithRelationInput";
import { TopicListsWhereInput } from "../../../inputs/TopicListsWhereInput";
import { TopicListsWhereUniqueInput } from "../../../inputs/TopicListsWhereUniqueInput";
export declare class FindManyTopicListsArgs {
    where?: TopicListsWhereInput | undefined;
    orderBy?: TopicListsOrderByWithRelationInput[] | undefined;
    cursor?: TopicListsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "type" | "title" | "lists" | "createdAt" | "updatedAt"> | undefined;
}
