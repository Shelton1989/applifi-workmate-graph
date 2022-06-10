import { ProductCreateOrConnectWithoutColorsInput } from "../inputs/ProductCreateOrConnectWithoutColorsInput";
import { ProductCreateWithoutColorsInput } from "../inputs/ProductCreateWithoutColorsInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductCreateNestedManyWithoutColorsInput {
    create?: ProductCreateWithoutColorsInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutColorsInput[] | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
}
