import { ProductCreateManyInventoryInputEnvelope } from "../inputs/ProductCreateManyInventoryInputEnvelope";
import { ProductCreateOrConnectWithoutInventoryInput } from "../inputs/ProductCreateOrConnectWithoutInventoryInput";
import { ProductCreateWithoutInventoryInput } from "../inputs/ProductCreateWithoutInventoryInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductCreateNestedManyWithoutInventoryInput {
    create?: ProductCreateWithoutInventoryInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutInventoryInput[] | undefined;
    createMany?: ProductCreateManyInventoryInputEnvelope | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
}
