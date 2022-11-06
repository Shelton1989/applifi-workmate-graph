import { EpisodeCreateOrConnectWithoutAggregateRatingInput } from "../inputs/EpisodeCreateOrConnectWithoutAggregateRatingInput";
import { EpisodeCreateWithoutAggregateRatingInput } from "../inputs/EpisodeCreateWithoutAggregateRatingInput";
import { EpisodeUpdateWithoutAggregateRatingInput } from "../inputs/EpisodeUpdateWithoutAggregateRatingInput";
import { EpisodeUpsertWithoutAggregateRatingInput } from "../inputs/EpisodeUpsertWithoutAggregateRatingInput";
import { EpisodeWhereUniqueInput } from "../inputs/EpisodeWhereUniqueInput";
export declare class EpisodeUpdateOneWithoutAggregateRatingInput {
    create?: EpisodeCreateWithoutAggregateRatingInput | undefined;
    connectOrCreate?: EpisodeCreateOrConnectWithoutAggregateRatingInput | undefined;
    upsert?: EpisodeUpsertWithoutAggregateRatingInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: EpisodeWhereUniqueInput | undefined;
    update?: EpisodeUpdateWithoutAggregateRatingInput | undefined;
}
