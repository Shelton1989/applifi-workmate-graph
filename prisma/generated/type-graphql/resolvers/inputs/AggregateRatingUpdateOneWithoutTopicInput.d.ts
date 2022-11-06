import { AggregateRatingCreateOrConnectWithoutTopicInput } from "../inputs/AggregateRatingCreateOrConnectWithoutTopicInput";
import { AggregateRatingCreateWithoutTopicInput } from "../inputs/AggregateRatingCreateWithoutTopicInput";
import { AggregateRatingUpdateWithoutTopicInput } from "../inputs/AggregateRatingUpdateWithoutTopicInput";
import { AggregateRatingUpsertWithoutTopicInput } from "../inputs/AggregateRatingUpsertWithoutTopicInput";
import { AggregateRatingWhereUniqueInput } from "../inputs/AggregateRatingWhereUniqueInput";
export declare class AggregateRatingUpdateOneWithoutTopicInput {
    create?: AggregateRatingCreateWithoutTopicInput | undefined;
    connectOrCreate?: AggregateRatingCreateOrConnectWithoutTopicInput | undefined;
    upsert?: AggregateRatingUpsertWithoutTopicInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: AggregateRatingWhereUniqueInput | undefined;
    update?: AggregateRatingUpdateWithoutTopicInput | undefined;
}
