import { ReactionCreateManySeasonSeriesInputEnvelope } from "../inputs/ReactionCreateManySeasonSeriesInputEnvelope";
import { ReactionCreateOrConnectWithoutSeasonSeriesInput } from "../inputs/ReactionCreateOrConnectWithoutSeasonSeriesInput";
import { ReactionCreateWithoutSeasonSeriesInput } from "../inputs/ReactionCreateWithoutSeasonSeriesInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";
export declare class ReactionCreateNestedManyWithoutSeasonSeriesInput {
    create?: ReactionCreateWithoutSeasonSeriesInput[] | undefined;
    connectOrCreate?: ReactionCreateOrConnectWithoutSeasonSeriesInput[] | undefined;
    createMany?: ReactionCreateManySeasonSeriesInputEnvelope | undefined;
    connect?: ReactionWhereUniqueInput[] | undefined;
}
