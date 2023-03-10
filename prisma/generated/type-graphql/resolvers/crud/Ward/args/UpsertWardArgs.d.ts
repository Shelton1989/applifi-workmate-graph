import { WardCreateInput } from "../../../inputs/WardCreateInput";
import { WardUpdateInput } from "../../../inputs/WardUpdateInput";
import { WardWhereUniqueInput } from "../../../inputs/WardWhereUniqueInput";
export declare class UpsertWardArgs {
    where: WardWhereUniqueInput;
    create: WardCreateInput;
    update: WardUpdateInput;
}
