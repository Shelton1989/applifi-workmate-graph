import { ProductCreateOrConnectWithoutSizesInput } from "../inputs/ProductCreateOrConnectWithoutSizesInput";
import { ProductCreateWithoutSizesInput } from "../inputs/ProductCreateWithoutSizesInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutSizesInput } from "../inputs/ProductUpdateManyWithWhereWithoutSizesInput";
import { ProductUpdateWithWhereUniqueWithoutSizesInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutSizesInput";
import { ProductUpsertWithWhereUniqueWithoutSizesInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutSizesInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductUpdateManyWithoutSizesInput {
    create?: ProductCreateWithoutSizesInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutSizesInput[] | undefined;
    upsert?: ProductUpsertWithWhereUniqueWithoutSizesInput[] | undefined;
    set?: ProductWhereUniqueInput[] | undefined;
    disconnect?: ProductWhereUniqueInput[] | undefined;
    delete?: ProductWhereUniqueInput[] | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
    update?: ProductUpdateWithWhereUniqueWithoutSizesInput[] | undefined;
    updateMany?: ProductUpdateManyWithWhereWithoutSizesInput[] | undefined;
    deleteMany?: ProductScalarWhereInput[] | undefined;
}
