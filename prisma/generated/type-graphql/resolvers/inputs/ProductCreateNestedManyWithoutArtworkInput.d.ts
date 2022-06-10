import { ProductCreateOrConnectWithoutArtworkInput } from "../inputs/ProductCreateOrConnectWithoutArtworkInput";
import { ProductCreateWithoutArtworkInput } from "../inputs/ProductCreateWithoutArtworkInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductCreateNestedManyWithoutArtworkInput {
    create?: ProductCreateWithoutArtworkInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutArtworkInput[] | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
}
