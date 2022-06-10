import { ColorCreateInput } from "../../../inputs/ColorCreateInput";
import { ColorUpdateInput } from "../../../inputs/ColorUpdateInput";
import { ColorWhereUniqueInput } from "../../../inputs/ColorWhereUniqueInput";
export declare class UpsertColorArgs {
    where: ColorWhereUniqueInput;
    create: ColorCreateInput;
    update: ColorUpdateInput;
}
