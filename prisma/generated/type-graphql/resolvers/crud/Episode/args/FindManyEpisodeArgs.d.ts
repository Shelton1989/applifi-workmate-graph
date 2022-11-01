import { EpisodeOrderByWithRelationInput } from "../../../inputs/EpisodeOrderByWithRelationInput";
import { EpisodeWhereInput } from "../../../inputs/EpisodeWhereInput";
import { EpisodeWhereUniqueInput } from "../../../inputs/EpisodeWhereUniqueInput";
export declare class FindManyEpisodeArgs {
    where?: EpisodeWhereInput | undefined;
    orderBy?: EpisodeOrderByWithRelationInput[] | undefined;
    cursor?: EpisodeWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "episodeNumber" | "title" | "year" | "poster" | "overview" | "trailer" | "coverImage" | "tagline" | "seasonSeriesId" | "createdAt" | "updatedAt"> | undefined;
}