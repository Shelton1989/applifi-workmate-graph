import { BrandProductOrderByWithRelationInput } from "../../../inputs/BrandProductOrderByWithRelationInput";
import { BrandProductWhereInput } from "../../../inputs/BrandProductWhereInput";
import { BrandProductWhereUniqueInput } from "../../../inputs/BrandProductWhereUniqueInput";
export declare class AggregateBrandProductArgs {
    where?: BrandProductWhereInput | undefined;
    orderBy?: BrandProductOrderByWithRelationInput[] | undefined;
    cursor?: BrandProductWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
