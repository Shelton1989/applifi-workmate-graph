import { EpisodeOrderByWithRelationInput } from "../../../inputs/EpisodeOrderByWithRelationInput";
import { EpisodeWhereInput } from "../../../inputs/EpisodeWhereInput";
import { EpisodeWhereUniqueInput } from "../../../inputs/EpisodeWhereUniqueInput";
export declare class AggregateEpisodeArgs {
    where?: EpisodeWhereInput | undefined;
    orderBy?: EpisodeOrderByWithRelationInput[] | undefined;
    cursor?: EpisodeWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
