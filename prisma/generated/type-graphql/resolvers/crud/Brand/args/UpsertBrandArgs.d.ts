import { BrandCreateInput } from "../../../inputs/BrandCreateInput";
import { BrandUpdateInput } from "../../../inputs/BrandUpdateInput";
import { BrandWhereUniqueInput } from "../../../inputs/BrandWhereUniqueInput";
export declare class UpsertBrandArgs {
    where: BrandWhereUniqueInput;
    create: BrandCreateInput;
    update: BrandUpdateInput;
}
