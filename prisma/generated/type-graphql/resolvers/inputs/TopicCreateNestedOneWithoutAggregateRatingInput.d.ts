import { TopicCreateOrConnectWithoutAggregateRatingInput } from "../inputs/TopicCreateOrConnectWithoutAggregateRatingInput";
import { TopicCreateWithoutAggregateRatingInput } from "../inputs/TopicCreateWithoutAggregateRatingInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";
export declare class TopicCreateNestedOneWithoutAggregateRatingInput {
    create?: TopicCreateWithoutAggregateRatingInput | undefined;
    connectOrCreate?: TopicCreateOrConnectWithoutAggregateRatingInput | undefined;
    connect?: TopicWhereUniqueInput | undefined;
}
