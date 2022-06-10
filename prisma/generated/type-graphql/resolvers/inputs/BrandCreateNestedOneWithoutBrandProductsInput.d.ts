import { BrandCreateOrConnectWithoutBrandProductsInput } from "../inputs/BrandCreateOrConnectWithoutBrandProductsInput";
import { BrandCreateWithoutBrandProductsInput } from "../inputs/BrandCreateWithoutBrandProductsInput";
import { BrandWhereUniqueInput } from "../inputs/BrandWhereUniqueInput";
export declare class BrandCreateNestedOneWithoutBrandProductsInput {
    create?: BrandCreateWithoutBrandProductsInput | undefined;
    connectOrCreate?: BrandCreateOrConnectWithoutBrandProductsInput | undefined;
    connect?: BrandWhereUniqueInput | undefined;
}
