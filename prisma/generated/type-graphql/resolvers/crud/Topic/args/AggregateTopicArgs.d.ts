import { TopicOrderByWithRelationInput } from "../../../inputs/TopicOrderByWithRelationInput";
import { TopicWhereInput } from "../../../inputs/TopicWhereInput";
import { TopicWhereUniqueInput } from "../../../inputs/TopicWhereUniqueInput";
export declare class AggregateTopicArgs {
    where?: TopicWhereInput | undefined;
    orderBy?: TopicOrderByWithRelationInput[] | undefined;
    cursor?: TopicWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
