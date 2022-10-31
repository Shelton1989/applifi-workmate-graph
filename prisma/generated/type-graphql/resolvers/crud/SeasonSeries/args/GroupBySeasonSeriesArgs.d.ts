import { SeasonSeriesOrderByWithAggregationInput } from "../../../inputs/SeasonSeriesOrderByWithAggregationInput";
import { SeasonSeriesScalarWhereWithAggregatesInput } from "../../../inputs/SeasonSeriesScalarWhereWithAggregatesInput";
import { SeasonSeriesWhereInput } from "../../../inputs/SeasonSeriesWhereInput";
export declare class GroupBySeasonSeriesArgs {
    where?: SeasonSeriesWhereInput | undefined;
    orderBy?: SeasonSeriesOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "seasonOrSeriesNumber" | "title" | "year" | "poster" | "overview" | "trailer" | "coverImage" | "tagline" | "topicId" | "createdAt" | "updatedAt">;
    having?: SeasonSeriesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
