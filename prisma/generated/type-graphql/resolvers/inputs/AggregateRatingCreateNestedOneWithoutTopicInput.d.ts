import { AggregateRatingCreateOrConnectWithoutTopicInput } from "../inputs/AggregateRatingCreateOrConnectWithoutTopicInput";
import { AggregateRatingCreateWithoutTopicInput } from "../inputs/AggregateRatingCreateWithoutTopicInput";
import { AggregateRatingWhereUniqueInput } from "../inputs/AggregateRatingWhereUniqueInput";
export declare class AggregateRatingCreateNestedOneWithoutTopicInput {
    create?: AggregateRatingCreateWithoutTopicInput | undefined;
    connectOrCreate?: AggregateRatingCreateOrConnectWithoutTopicInput | undefined;
    connect?: AggregateRatingWhereUniqueInput | undefined;
}
