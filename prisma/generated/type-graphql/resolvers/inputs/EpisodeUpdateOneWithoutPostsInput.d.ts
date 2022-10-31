import { EpisodeCreateOrConnectWithoutPostsInput } from "../inputs/EpisodeCreateOrConnectWithoutPostsInput";
import { EpisodeCreateWithoutPostsInput } from "../inputs/EpisodeCreateWithoutPostsInput";
import { EpisodeUpdateWithoutPostsInput } from "../inputs/EpisodeUpdateWithoutPostsInput";
import { EpisodeUpsertWithoutPostsInput } from "../inputs/EpisodeUpsertWithoutPostsInput";
import { EpisodeWhereUniqueInput } from "../inputs/EpisodeWhereUniqueInput";
export declare class EpisodeUpdateOneWithoutPostsInput {
    create?: EpisodeCreateWithoutPostsInput | undefined;
    connectOrCreate?: EpisodeCreateOrConnectWithoutPostsInput | undefined;
    upsert?: EpisodeUpsertWithoutPostsInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: EpisodeWhereUniqueInput | undefined;
    update?: EpisodeUpdateWithoutPostsInput | undefined;
}
