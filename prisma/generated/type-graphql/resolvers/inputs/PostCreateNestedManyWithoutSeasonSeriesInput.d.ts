import { PostCreateManySeasonSeriesInputEnvelope } from "../inputs/PostCreateManySeasonSeriesInputEnvelope";
import { PostCreateOrConnectWithoutSeasonSeriesInput } from "../inputs/PostCreateOrConnectWithoutSeasonSeriesInput";
import { PostCreateWithoutSeasonSeriesInput } from "../inputs/PostCreateWithoutSeasonSeriesInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostCreateNestedManyWithoutSeasonSeriesInput {
    create?: PostCreateWithoutSeasonSeriesInput[] | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutSeasonSeriesInput[] | undefined;
    createMany?: PostCreateManySeasonSeriesInputEnvelope | undefined;
    connect?: PostWhereUniqueInput[] | undefined;
}
