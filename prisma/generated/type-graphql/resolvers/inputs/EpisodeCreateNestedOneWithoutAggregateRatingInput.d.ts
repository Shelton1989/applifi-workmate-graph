import { EpisodeCreateOrConnectWithoutAggregateRatingInput } from "../inputs/EpisodeCreateOrConnectWithoutAggregateRatingInput";
import { EpisodeCreateWithoutAggregateRatingInput } from "../inputs/EpisodeCreateWithoutAggregateRatingInput";
import { EpisodeWhereUniqueInput } from "../inputs/EpisodeWhereUniqueInput";
export declare class EpisodeCreateNestedOneWithoutAggregateRatingInput {
    create?: EpisodeCreateWithoutAggregateRatingInput | undefined;
    connectOrCreate?: EpisodeCreateOrConnectWithoutAggregateRatingInput | undefined;
    connect?: EpisodeWhereUniqueInput | undefined;
}
