import { BrandCreateOrConnectWithoutBrandProductsInput } from "../inputs/BrandCreateOrConnectWithoutBrandProductsInput";
import { BrandCreateWithoutBrandProductsInput } from "../inputs/BrandCreateWithoutBrandProductsInput";
import { BrandUpdateWithoutBrandProductsInput } from "../inputs/BrandUpdateWithoutBrandProductsInput";
import { BrandUpsertWithoutBrandProductsInput } from "../inputs/BrandUpsertWithoutBrandProductsInput";
import { BrandWhereUniqueInput } from "../inputs/BrandWhereUniqueInput";
export declare class BrandUpdateOneRequiredWithoutBrandProductsInput {
    create?: BrandCreateWithoutBrandProductsInput | undefined;
    connectOrCreate?: BrandCreateOrConnectWithoutBrandProductsInput | undefined;
    upsert?: BrandUpsertWithoutBrandProductsInput | undefined;
    connect?: BrandWhereUniqueInput | undefined;
    update?: BrandUpdateWithoutBrandProductsInput | undefined;
}
