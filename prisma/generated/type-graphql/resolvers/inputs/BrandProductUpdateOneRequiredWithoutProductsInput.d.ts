import { BrandProductCreateOrConnectWithoutProductsInput } from "../inputs/BrandProductCreateOrConnectWithoutProductsInput";
import { BrandProductCreateWithoutProductsInput } from "../inputs/BrandProductCreateWithoutProductsInput";
import { BrandProductUpdateWithoutProductsInput } from "../inputs/BrandProductUpdateWithoutProductsInput";
import { BrandProductUpsertWithoutProductsInput } from "../inputs/BrandProductUpsertWithoutProductsInput";
import { BrandProductWhereUniqueInput } from "../inputs/BrandProductWhereUniqueInput";
export declare class BrandProductUpdateOneRequiredWithoutProductsInput {
    create?: BrandProductCreateWithoutProductsInput | undefined;
    connectOrCreate?: BrandProductCreateOrConnectWithoutProductsInput | undefined;
    upsert?: BrandProductUpsertWithoutProductsInput | undefined;
    connect?: BrandProductWhereUniqueInput | undefined;
    update?: BrandProductUpdateWithoutProductsInput | undefined;
}
