import { ReactionCreateInput } from "../../../inputs/ReactionCreateInput";
import { ReactionUpdateInput } from "../../../inputs/ReactionUpdateInput";
import { ReactionWhereUniqueInput } from "../../../inputs/ReactionWhereUniqueInput";
export declare class UpsertReactionArgs {
    where: ReactionWhereUniqueInput;
    create: ReactionCreateInput;
    update: ReactionUpdateInput;
}
