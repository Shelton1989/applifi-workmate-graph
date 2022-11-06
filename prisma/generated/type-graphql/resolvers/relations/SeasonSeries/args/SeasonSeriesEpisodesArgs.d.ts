import { EpisodeOrderByWithRelationInput } from "../../../inputs/EpisodeOrderByWithRelationInput";
import { EpisodeWhereInput } from "../../../inputs/EpisodeWhereInput";
import { EpisodeWhereUniqueInput } from "../../../inputs/EpisodeWhereUniqueInput";
export declare class SeasonSeriesEpisodesArgs {
    where?: EpisodeWhereInput | undefined;
    orderBy?: EpisodeOrderByWithRelationInput[] | undefined;
    cursor?: EpisodeWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "episodeNumber" | "title" | "year" | "poster" | "overview" | "trailer" | "coverImage" | "tagline" | "releaseDate" | "seasonSeriesId" | "createdAt" | "updatedAt"> | undefined;
}
