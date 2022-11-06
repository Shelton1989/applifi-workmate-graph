import { AggregateRatingCreateOrConnectWithoutEpisodeInput } from "../inputs/AggregateRatingCreateOrConnectWithoutEpisodeInput";
import { AggregateRatingCreateWithoutEpisodeInput } from "../inputs/AggregateRatingCreateWithoutEpisodeInput";
import { AggregateRatingUpdateWithoutEpisodeInput } from "../inputs/AggregateRatingUpdateWithoutEpisodeInput";
import { AggregateRatingUpsertWithoutEpisodeInput } from "../inputs/AggregateRatingUpsertWithoutEpisodeInput";
import { AggregateRatingWhereUniqueInput } from "../inputs/AggregateRatingWhereUniqueInput";
export declare class AggregateRatingUpdateOneWithoutEpisodeInput {
    create?: AggregateRatingCreateWithoutEpisodeInput | undefined;
    connectOrCreate?: AggregateRatingCreateOrConnectWithoutEpisodeInput | undefined;
    upsert?: AggregateRatingUpsertWithoutEpisodeInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: AggregateRatingWhereUniqueInput | undefined;
    update?: AggregateRatingUpdateWithoutEpisodeInput | undefined;
}
