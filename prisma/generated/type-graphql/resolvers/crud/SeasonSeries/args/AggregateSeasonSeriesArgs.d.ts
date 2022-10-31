import { SeasonSeriesOrderByWithRelationInput } from "../../../inputs/SeasonSeriesOrderByWithRelationInput";
import { SeasonSeriesWhereInput } from "../../../inputs/SeasonSeriesWhereInput";
import { SeasonSeriesWhereUniqueInput } from "../../../inputs/SeasonSeriesWhereUniqueInput";
export declare class AggregateSeasonSeriesArgs {
    where?: SeasonSeriesWhereInput | undefined;
    orderBy?: SeasonSeriesOrderByWithRelationInput[] | undefined;
    cursor?: SeasonSeriesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
