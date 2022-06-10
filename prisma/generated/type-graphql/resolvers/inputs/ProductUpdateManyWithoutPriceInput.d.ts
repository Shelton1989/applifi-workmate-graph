import { ProductCreateManyPriceInputEnvelope } from "../inputs/ProductCreateManyPriceInputEnvelope";
import { ProductCreateOrConnectWithoutPriceInput } from "../inputs/ProductCreateOrConnectWithoutPriceInput";
import { ProductCreateWithoutPriceInput } from "../inputs/ProductCreateWithoutPriceInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutPriceInput } from "../inputs/ProductUpdateManyWithWhereWithoutPriceInput";
import { ProductUpdateWithWhereUniqueWithoutPriceInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutPriceInput";
import { ProductUpsertWithWhereUniqueWithoutPriceInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutPriceInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductUpdateManyWithoutPriceInput {
    create?: ProductCreateWithoutPriceInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutPriceInput[] | undefined;
    upsert?: ProductUpsertWithWhereUniqueWithoutPriceInput[] | undefined;
    createMany?: ProductCreateManyPriceInputEnvelope | undefined;
    set?: ProductWhereUniqueInput[] | undefined;
    disconnect?: ProductWhereUniqueInput[] | undefined;
    delete?: ProductWhereUniqueInput[] | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
    update?: ProductUpdateWithWhereUniqueWithoutPriceInput[] | undefined;
    updateMany?: ProductUpdateManyWithWhereWithoutPriceInput[] | undefined;
    deleteMany?: ProductScalarWhereInput[] | undefined;
}
