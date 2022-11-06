import { SeasonSeriesOrderByWithRelationInput } from "../../../inputs/SeasonSeriesOrderByWithRelationInput";
import { SeasonSeriesWhereInput } from "../../../inputs/SeasonSeriesWhereInput";
import { SeasonSeriesWhereUniqueInput } from "../../../inputs/SeasonSeriesWhereUniqueInput";
export declare class FindFirstSeasonSeriesArgs {
    where?: SeasonSeriesWhereInput | undefined;
    orderBy?: SeasonSeriesOrderByWithRelationInput[] | undefined;
    cursor?: SeasonSeriesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "seasonOrSeriesNumber" | "title" | "year" | "poster" | "overview" | "trailer" | "coverImage" | "tagline" | "releaseDate" | "topicId" | "createdAt" | "updatedAt"> | undefined;
}
