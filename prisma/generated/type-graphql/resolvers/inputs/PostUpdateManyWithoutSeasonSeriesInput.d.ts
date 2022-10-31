import { PostCreateManySeasonSeriesInputEnvelope } from "../inputs/PostCreateManySeasonSeriesInputEnvelope";
import { PostCreateOrConnectWithoutSeasonSeriesInput } from "../inputs/PostCreateOrConnectWithoutSeasonSeriesInput";
import { PostCreateWithoutSeasonSeriesInput } from "../inputs/PostCreateWithoutSeasonSeriesInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereWithoutSeasonSeriesInput } from "../inputs/PostUpdateManyWithWhereWithoutSeasonSeriesInput";
import { PostUpdateWithWhereUniqueWithoutSeasonSeriesInput } from "../inputs/PostUpdateWithWhereUniqueWithoutSeasonSeriesInput";
import { PostUpsertWithWhereUniqueWithoutSeasonSeriesInput } from "../inputs/PostUpsertWithWhereUniqueWithoutSeasonSeriesInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostUpdateManyWithoutSeasonSeriesInput {
    create?: PostCreateWithoutSeasonSeriesInput[] | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutSeasonSeriesInput[] | undefined;
    upsert?: PostUpsertWithWhereUniqueWithoutSeasonSeriesInput[] | undefined;
    createMany?: PostCreateManySeasonSeriesInputEnvelope | undefined;
    set?: PostWhereUniqueInput[] | undefined;
    disconnect?: PostWhereUniqueInput[] | undefined;
    delete?: PostWhereUniqueInput[] | undefined;
    connect?: PostWhereUniqueInput[] | undefined;
    update?: PostUpdateWithWhereUniqueWithoutSeasonSeriesInput[] | undefined;
    updateMany?: PostUpdateManyWithWhereWithoutSeasonSeriesInput[] | undefined;
    deleteMany?: PostScalarWhereInput[] | undefined;
}
