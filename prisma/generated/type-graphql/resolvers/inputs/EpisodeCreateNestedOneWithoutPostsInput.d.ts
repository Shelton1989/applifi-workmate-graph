import { EpisodeCreateOrConnectWithoutPostsInput } from "../inputs/EpisodeCreateOrConnectWithoutPostsInput";
import { EpisodeCreateWithoutPostsInput } from "../inputs/EpisodeCreateWithoutPostsInput";
import { EpisodeWhereUniqueInput } from "../inputs/EpisodeWhereUniqueInput";
export declare class EpisodeCreateNestedOneWithoutPostsInput {
    create?: EpisodeCreateWithoutPostsInput | undefined;
    connectOrCreate?: EpisodeCreateOrConnectWithoutPostsInput | undefined;
    connect?: EpisodeWhereUniqueInput | undefined;
}
