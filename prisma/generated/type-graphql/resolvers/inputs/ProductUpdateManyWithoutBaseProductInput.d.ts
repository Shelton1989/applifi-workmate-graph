import { ProductCreateManyBaseProductInputEnvelope } from "../inputs/ProductCreateManyBaseProductInputEnvelope";
import { ProductCreateOrConnectWithoutBaseProductInput } from "../inputs/ProductCreateOrConnectWithoutBaseProductInput";
import { ProductCreateWithoutBaseProductInput } from "../inputs/ProductCreateWithoutBaseProductInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutBaseProductInput } from "../inputs/ProductUpdateManyWithWhereWithoutBaseProductInput";
import { ProductUpdateWithWhereUniqueWithoutBaseProductInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutBaseProductInput";
import { ProductUpsertWithWhereUniqueWithoutBaseProductInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutBaseProductInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductUpdateManyWithoutBaseProductInput {
    create?: ProductCreateWithoutBaseProductInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutBaseProductInput[] | undefined;
    upsert?: ProductUpsertWithWhereUniqueWithoutBaseProductInput[] | undefined;
    createMany?: ProductCreateManyBaseProductInputEnvelope | undefined;
    set?: ProductWhereUniqueInput[] | undefined;
    disconnect?: ProductWhereUniqueInput[] | undefined;
    delete?: ProductWhereUniqueInput[] | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
    update?: ProductUpdateWithWhereUniqueWithoutBaseProductInput[] | undefined;
    updateMany?: ProductUpdateManyWithWhereWithoutBaseProductInput[] | undefined;
    deleteMany?: ProductScalarWhereInput[] | undefined;
}
