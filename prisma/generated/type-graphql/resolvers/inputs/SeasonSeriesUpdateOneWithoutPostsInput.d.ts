import { SeasonSeriesCreateOrConnectWithoutPostsInput } from "../inputs/SeasonSeriesCreateOrConnectWithoutPostsInput";
import { SeasonSeriesCreateWithoutPostsInput } from "../inputs/SeasonSeriesCreateWithoutPostsInput";
import { SeasonSeriesUpdateWithoutPostsInput } from "../inputs/SeasonSeriesUpdateWithoutPostsInput";
import { SeasonSeriesUpsertWithoutPostsInput } from "../inputs/SeasonSeriesUpsertWithoutPostsInput";
import { SeasonSeriesWhereUniqueInput } from "../inputs/SeasonSeriesWhereUniqueInput";
export declare class SeasonSeriesUpdateOneWithoutPostsInput {
    create?: SeasonSeriesCreateWithoutPostsInput | undefined;
    connectOrCreate?: SeasonSeriesCreateOrConnectWithoutPostsInput | undefined;
    upsert?: SeasonSeriesUpsertWithoutPostsInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: SeasonSeriesWhereUniqueInput | undefined;
    update?: SeasonSeriesUpdateWithoutPostsInput | undefined;
}
