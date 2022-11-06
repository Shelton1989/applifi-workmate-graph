import { AggregateRatingCreateOrConnectWithoutEpisodeInput } from "../inputs/AggregateRatingCreateOrConnectWithoutEpisodeInput";
import { AggregateRatingCreateWithoutEpisodeInput } from "../inputs/AggregateRatingCreateWithoutEpisodeInput";
import { AggregateRatingWhereUniqueInput } from "../inputs/AggregateRatingWhereUniqueInput";
export declare class AggregateRatingCreateNestedOneWithoutEpisodeInput {
    create?: AggregateRatingCreateWithoutEpisodeInput | undefined;
    connectOrCreate?: AggregateRatingCreateOrConnectWithoutEpisodeInput | undefined;
    connect?: AggregateRatingWhereUniqueInput | undefined;
}
