import { EpisodeCreateOrConnectWithoutReactionsInput } from "../inputs/EpisodeCreateOrConnectWithoutReactionsInput";
import { EpisodeCreateWithoutReactionsInput } from "../inputs/EpisodeCreateWithoutReactionsInput";
import { EpisodeUpdateWithoutReactionsInput } from "../inputs/EpisodeUpdateWithoutReactionsInput";
import { EpisodeUpsertWithoutReactionsInput } from "../inputs/EpisodeUpsertWithoutReactionsInput";
import { EpisodeWhereUniqueInput } from "../inputs/EpisodeWhereUniqueInput";
export declare class EpisodeUpdateOneWithoutReactionsInput {
    create?: EpisodeCreateWithoutReactionsInput | undefined;
    connectOrCreate?: EpisodeCreateOrConnectWithoutReactionsInput | undefined;
    upsert?: EpisodeUpsertWithoutReactionsInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: EpisodeWhereUniqueInput | undefined;
    update?: EpisodeUpdateWithoutReactionsInput | undefined;
}
