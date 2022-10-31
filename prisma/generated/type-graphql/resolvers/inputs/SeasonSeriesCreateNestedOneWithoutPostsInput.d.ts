import { SeasonSeriesCreateOrConnectWithoutPostsInput } from "../inputs/SeasonSeriesCreateOrConnectWithoutPostsInput";
import { SeasonSeriesCreateWithoutPostsInput } from "../inputs/SeasonSeriesCreateWithoutPostsInput";
import { SeasonSeriesWhereUniqueInput } from "../inputs/SeasonSeriesWhereUniqueInput";
export declare class SeasonSeriesCreateNestedOneWithoutPostsInput {
    create?: SeasonSeriesCreateWithoutPostsInput | undefined;
    connectOrCreate?: SeasonSeriesCreateOrConnectWithoutPostsInput | undefined;
    connect?: SeasonSeriesWhereUniqueInput | undefined;
}
