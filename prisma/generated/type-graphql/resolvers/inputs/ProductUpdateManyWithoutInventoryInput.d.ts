import { ProductCreateManyInventoryInputEnvelope } from "../inputs/ProductCreateManyInventoryInputEnvelope";
import { ProductCreateOrConnectWithoutInventoryInput } from "../inputs/ProductCreateOrConnectWithoutInventoryInput";
import { ProductCreateWithoutInventoryInput } from "../inputs/ProductCreateWithoutInventoryInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutInventoryInput } from "../inputs/ProductUpdateManyWithWhereWithoutInventoryInput";
import { ProductUpdateWithWhereUniqueWithoutInventoryInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutInventoryInput";
import { ProductUpsertWithWhereUniqueWithoutInventoryInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutInventoryInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductUpdateManyWithoutInventoryInput {
    create?: ProductCreateWithoutInventoryInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutInventoryInput[] | undefined;
    upsert?: ProductUpsertWithWhereUniqueWithoutInventoryInput[] | undefined;
    createMany?: ProductCreateManyInventoryInputEnvelope | undefined;
    set?: ProductWhereUniqueInput[] | undefined;
    disconnect?: ProductWhereUniqueInput[] | undefined;
    delete?: ProductWhereUniqueInput[] | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
    update?: ProductUpdateWithWhereUniqueWithoutInventoryInput[] | undefined;
    updateMany?: ProductUpdateManyWithWhereWithoutInventoryInput[] | undefined;
    deleteMany?: ProductScalarWhereInput[] | undefined;
}
