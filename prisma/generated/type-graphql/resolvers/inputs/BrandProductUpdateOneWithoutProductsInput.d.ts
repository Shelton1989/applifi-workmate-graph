import { BrandProductCreateOrConnectWithoutProductsInput } from "../inputs/BrandProductCreateOrConnectWithoutProductsInput";
import { BrandProductCreateWithoutProductsInput } from "../inputs/BrandProductCreateWithoutProductsInput";
import { BrandProductUpdateWithoutProductsInput } from "../inputs/BrandProductUpdateWithoutProductsInput";
import { BrandProductUpsertWithoutProductsInput } from "../inputs/BrandProductUpsertWithoutProductsInput";
import { BrandProductWhereUniqueInput } from "../inputs/BrandProductWhereUniqueInput";
export declare class BrandProductUpdateOneWithoutProductsInput {
    create?: BrandProductCreateWithoutProductsInput | undefined;
    connectOrCreate?: BrandProductCreateOrConnectWithoutProductsInput | undefined;
    upsert?: BrandProductUpsertWithoutProductsInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: BrandProductWhereUniqueInput | undefined;
    update?: BrandProductUpdateWithoutProductsInput | undefined;
}
