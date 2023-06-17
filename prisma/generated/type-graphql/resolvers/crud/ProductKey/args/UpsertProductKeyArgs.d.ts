import { ProductKeyCreateInput } from "../../../inputs/ProductKeyCreateInput";
import { ProductKeyUpdateInput } from "../../../inputs/ProductKeyUpdateInput";
import { ProductKeyWhereUniqueInput } from "../../../inputs/ProductKeyWhereUniqueInput";
export declare class UpsertProductKeyArgs {
    where: ProductKeyWhereUniqueInput;
    create: ProductKeyCreateInput;
    update: ProductKeyUpdateInput;
}
