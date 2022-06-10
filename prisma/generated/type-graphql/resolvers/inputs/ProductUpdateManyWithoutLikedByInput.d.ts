import { ProductCreateOrConnectWithoutLikedByInput } from "../inputs/ProductCreateOrConnectWithoutLikedByInput";
import { ProductCreateWithoutLikedByInput } from "../inputs/ProductCreateWithoutLikedByInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutLikedByInput } from "../inputs/ProductUpdateManyWithWhereWithoutLikedByInput";
import { ProductUpdateWithWhereUniqueWithoutLikedByInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutLikedByInput";
import { ProductUpsertWithWhereUniqueWithoutLikedByInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutLikedByInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductUpdateManyWithoutLikedByInput {
    create?: ProductCreateWithoutLikedByInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutLikedByInput[] | undefined;
    upsert?: ProductUpsertWithWhereUniqueWithoutLikedByInput[] | undefined;
    set?: ProductWhereUniqueInput[] | undefined;
    disconnect?: ProductWhereUniqueInput[] | undefined;
    delete?: ProductWhereUniqueInput[] | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
    update?: ProductUpdateWithWhereUniqueWithoutLikedByInput[] | undefined;
    updateMany?: ProductUpdateManyWithWhereWithoutLikedByInput[] | undefined;
    deleteMany?: ProductScalarWhereInput[] | undefined;
}
