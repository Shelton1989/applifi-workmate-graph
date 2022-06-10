import { BrandProductCreateOrConnectWithoutProductsInput } from "../inputs/BrandProductCreateOrConnectWithoutProductsInput";
import { BrandProductCreateWithoutProductsInput } from "../inputs/BrandProductCreateWithoutProductsInput";
import { BrandProductWhereUniqueInput } from "../inputs/BrandProductWhereUniqueInput";
export declare class BrandProductCreateNestedOneWithoutProductsInput {
    create?: BrandProductCreateWithoutProductsInput | undefined;
    connectOrCreate?: BrandProductCreateOrConnectWithoutProductsInput | undefined;
    connect?: BrandProductWhereUniqueInput | undefined;
}
