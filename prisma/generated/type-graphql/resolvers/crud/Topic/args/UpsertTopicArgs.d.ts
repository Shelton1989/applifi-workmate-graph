import { TopicCreateInput } from "../../../inputs/TopicCreateInput";
import { TopicUpdateInput } from "../../../inputs/TopicUpdateInput";
import { TopicWhereUniqueInput } from "../../../inputs/TopicWhereUniqueInput";
export declare class UpsertTopicArgs {
    where: TopicWhereUniqueInput;
    create: TopicCreateInput;
    update: TopicUpdateInput;
}
