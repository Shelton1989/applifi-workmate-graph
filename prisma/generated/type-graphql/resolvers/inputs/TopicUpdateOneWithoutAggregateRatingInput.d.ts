import { TopicCreateOrConnectWithoutAggregateRatingInput } from "../inputs/TopicCreateOrConnectWithoutAggregateRatingInput";
import { TopicCreateWithoutAggregateRatingInput } from "../inputs/TopicCreateWithoutAggregateRatingInput";
import { TopicUpdateWithoutAggregateRatingInput } from "../inputs/TopicUpdateWithoutAggregateRatingInput";
import { TopicUpsertWithoutAggregateRatingInput } from "../inputs/TopicUpsertWithoutAggregateRatingInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";
export declare class TopicUpdateOneWithoutAggregateRatingInput {
    create?: TopicCreateWithoutAggregateRatingInput | undefined;
    connectOrCreate?: TopicCreateOrConnectWithoutAggregateRatingInput | undefined;
    upsert?: TopicUpsertWithoutAggregateRatingInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: TopicWhereUniqueInput | undefined;
    update?: TopicUpdateWithoutAggregateRatingInput | undefined;
}
