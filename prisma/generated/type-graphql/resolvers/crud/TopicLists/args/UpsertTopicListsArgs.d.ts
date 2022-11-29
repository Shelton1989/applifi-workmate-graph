import { TopicListsCreateInput } from "../../../inputs/TopicListsCreateInput";
import { TopicListsUpdateInput } from "../../../inputs/TopicListsUpdateInput";
import { TopicListsWhereUniqueInput } from "../../../inputs/TopicListsWhereUniqueInput";
export declare class UpsertTopicListsArgs {
    where: TopicListsWhereUniqueInput;
    create: TopicListsCreateInput;
    update: TopicListsUpdateInput;
}
