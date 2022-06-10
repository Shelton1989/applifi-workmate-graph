import { ProductCreateOrConnectWithoutColorsInput } from "../inputs/ProductCreateOrConnectWithoutColorsInput";
import { ProductCreateWithoutColorsInput } from "../inputs/ProductCreateWithoutColorsInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutColorsInput } from "../inputs/ProductUpdateManyWithWhereWithoutColorsInput";
import { ProductUpdateWithWhereUniqueWithoutColorsInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutColorsInput";
import { ProductUpsertWithWhereUniqueWithoutColorsInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutColorsInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductUpdateManyWithoutColorsInput {
    create?: ProductCreateWithoutColorsInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutColorsInput[] | undefined;
    upsert?: ProductUpsertWithWhereUniqueWithoutColorsInput[] | undefined;
    set?: ProductWhereUniqueInput[] | undefined;
    disconnect?: ProductWhereUniqueInput[] | undefined;
    delete?: ProductWhereUniqueInput[] | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
    update?: ProductUpdateWithWhereUniqueWithoutColorsInput[] | undefined;
    updateMany?: ProductUpdateManyWithWhereWithoutColorsInput[] | undefined;
    deleteMany?: ProductScalarWhereInput[] | undefined;
}
