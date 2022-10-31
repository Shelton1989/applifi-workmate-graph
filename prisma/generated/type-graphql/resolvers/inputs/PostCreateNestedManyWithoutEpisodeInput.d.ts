import { PostCreateManyEpisodeInputEnvelope } from "../inputs/PostCreateManyEpisodeInputEnvelope";
import { PostCreateOrConnectWithoutEpisodeInput } from "../inputs/PostCreateOrConnectWithoutEpisodeInput";
import { PostCreateWithoutEpisodeInput } from "../inputs/PostCreateWithoutEpisodeInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostCreateNestedManyWithoutEpisodeInput {
    create?: PostCreateWithoutEpisodeInput[] | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutEpisodeInput[] | undefined;
    createMany?: PostCreateManyEpisodeInputEnvelope | undefined;
    connect?: PostWhereUniqueInput[] | undefined;
}
