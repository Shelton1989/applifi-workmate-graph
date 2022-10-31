import { ReactionCreateManyEpisodeInputEnvelope } from "../inputs/ReactionCreateManyEpisodeInputEnvelope";
import { ReactionCreateOrConnectWithoutEpisodeInput } from "../inputs/ReactionCreateOrConnectWithoutEpisodeInput";
import { ReactionCreateWithoutEpisodeInput } from "../inputs/ReactionCreateWithoutEpisodeInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";
export declare class ReactionCreateNestedManyWithoutEpisodeInput {
    create?: ReactionCreateWithoutEpisodeInput[] | undefined;
    connectOrCreate?: ReactionCreateOrConnectWithoutEpisodeInput[] | undefined;
    createMany?: ReactionCreateManyEpisodeInputEnvelope | undefined;
    connect?: ReactionWhereUniqueInput[] | undefined;
}
