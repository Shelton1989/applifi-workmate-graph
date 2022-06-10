import { ProductCreateOrConnectWithoutArtworkInput } from "../inputs/ProductCreateOrConnectWithoutArtworkInput";
import { ProductCreateWithoutArtworkInput } from "../inputs/ProductCreateWithoutArtworkInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutArtworkInput } from "../inputs/ProductUpdateManyWithWhereWithoutArtworkInput";
import { ProductUpdateWithWhereUniqueWithoutArtworkInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutArtworkInput";
import { ProductUpsertWithWhereUniqueWithoutArtworkInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutArtworkInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductUpdateManyWithoutArtworkInput {
    create?: ProductCreateWithoutArtworkInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutArtworkInput[] | undefined;
    upsert?: ProductUpsertWithWhereUniqueWithoutArtworkInput[] | undefined;
    set?: ProductWhereUniqueInput[] | undefined;
    disconnect?: ProductWhereUniqueInput[] | undefined;
    delete?: ProductWhereUniqueInput[] | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
    update?: ProductUpdateWithWhereUniqueWithoutArtworkInput[] | undefined;
    updateMany?: ProductUpdateManyWithWhereWithoutArtworkInput[] | undefined;
    deleteMany?: ProductScalarWhereInput[] | undefined;
}
