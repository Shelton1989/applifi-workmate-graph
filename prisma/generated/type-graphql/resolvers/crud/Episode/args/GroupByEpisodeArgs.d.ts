import { EpisodeOrderByWithAggregationInput } from "../../../inputs/EpisodeOrderByWithAggregationInput";
import { EpisodeScalarWhereWithAggregatesInput } from "../../../inputs/EpisodeScalarWhereWithAggregatesInput";
import { EpisodeWhereInput } from "../../../inputs/EpisodeWhereInput";
export declare class GroupByEpisodeArgs {
    where?: EpisodeWhereInput | undefined;
    orderBy?: EpisodeOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "episodeNumber" | "title" | "year" | "poster" | "overview" | "trailer" | "coverImage" | "tagline" | "releaseDate" | "seasonSeriesId" | "aggregateRatingId" | "createdAt" | "updatedAt">;
    having?: EpisodeScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
