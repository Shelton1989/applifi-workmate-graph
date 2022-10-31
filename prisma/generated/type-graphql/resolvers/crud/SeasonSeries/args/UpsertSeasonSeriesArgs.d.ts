import { SeasonSeriesCreateInput } from "../../../inputs/SeasonSeriesCreateInput";
import { SeasonSeriesUpdateInput } from "../../../inputs/SeasonSeriesUpdateInput";
import { SeasonSeriesWhereUniqueInput } from "../../../inputs/SeasonSeriesWhereUniqueInput";
export declare class UpsertSeasonSeriesArgs {
    where: SeasonSeriesWhereUniqueInput;
    create: SeasonSeriesCreateInput;
    update: SeasonSeriesUpdateInput;
}
