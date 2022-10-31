import { PostCreateManyEpisodeInputEnvelope } from "../inputs/PostCreateManyEpisodeInputEnvelope";
import { PostCreateOrConnectWithoutEpisodeInput } from "../inputs/PostCreateOrConnectWithoutEpisodeInput";
import { PostCreateWithoutEpisodeInput } from "../inputs/PostCreateWithoutEpisodeInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereWithoutEpisodeInput } from "../inputs/PostUpdateManyWithWhereWithoutEpisodeInput";
import { PostUpdateWithWhereUniqueWithoutEpisodeInput } from "../inputs/PostUpdateWithWhereUniqueWithoutEpisodeInput";
import { PostUpsertWithWhereUniqueWithoutEpisodeInput } from "../inputs/PostUpsertWithWhereUniqueWithoutEpisodeInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostUpdateManyWithoutEpisodeInput {
    create?: PostCreateWithoutEpisodeInput[] | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutEpisodeInput[] | undefined;
    upsert?: PostUpsertWithWhereUniqueWithoutEpisodeInput[] | undefined;
    createMany?: PostCreateManyEpisodeInputEnvelope | undefined;
    set?: PostWhereUniqueInput[] | undefined;
    disconnect?: PostWhereUniqueInput[] | undefined;
    delete?: PostWhereUniqueInput[] | undefined;
    connect?: PostWhereUniqueInput[] | undefined;
    update?: PostUpdateWithWhereUniqueWithoutEpisodeInput[] | undefined;
    updateMany?: PostUpdateManyWithWhereWithoutEpisodeInput[] | undefined;
    deleteMany?: PostScalarWhereInput[] | undefined;
}
