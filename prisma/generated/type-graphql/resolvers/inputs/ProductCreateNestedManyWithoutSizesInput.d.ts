import { ProductCreateOrConnectWithoutSizesInput } from "../inputs/ProductCreateOrConnectWithoutSizesInput";
import { ProductCreateWithoutSizesInput } from "../inputs/ProductCreateWithoutSizesInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductCreateNestedManyWithoutSizesInput {
    create?: ProductCreateWithoutSizesInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutSizesInput[] | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
}
