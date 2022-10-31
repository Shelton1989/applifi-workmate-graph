import { EpisodeCreateOrConnectWithoutReactionsInput } from "../inputs/EpisodeCreateOrConnectWithoutReactionsInput";
import { EpisodeCreateWithoutReactionsInput } from "../inputs/EpisodeCreateWithoutReactionsInput";
import { EpisodeWhereUniqueInput } from "../inputs/EpisodeWhereUniqueInput";
export declare class EpisodeCreateNestedOneWithoutReactionsInput {
    create?: EpisodeCreateWithoutReactionsInput | undefined;
    connectOrCreate?: EpisodeCreateOrConnectWithoutReactionsInput | undefined;
    connect?: EpisodeWhereUniqueInput | undefined;
}
