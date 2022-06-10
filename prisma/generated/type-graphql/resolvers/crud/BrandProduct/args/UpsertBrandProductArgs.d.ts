import { BrandProductCreateInput } from "../../../inputs/BrandProductCreateInput";
import { BrandProductUpdateInput } from "../../../inputs/BrandProductUpdateInput";
import { BrandProductWhereUniqueInput } from "../../../inputs/BrandProductWhereUniqueInput";
export declare class UpsertBrandProductArgs {
    where: BrandProductWhereUniqueInput;
    create: BrandProductCreateInput;
    update: BrandProductUpdateInput;
}
