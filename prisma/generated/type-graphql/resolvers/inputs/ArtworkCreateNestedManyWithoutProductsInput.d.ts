import { ArtworkCreateOrConnectWithoutProductsInput } from "../inputs/ArtworkCreateOrConnectWithoutProductsInput";
import { ArtworkCreateWithoutProductsInput } from "../inputs/ArtworkCreateWithoutProductsInput";
import { ArtworkWhereUniqueInput } from "../inputs/ArtworkWhereUniqueInput";
export declare class ArtworkCreateNestedManyWithoutProductsInput {
    create?: ArtworkCreateWithoutProductsInput[] | undefined;
    connectOrCreate?: ArtworkCreateOrConnectWithoutProductsInput[] | undefined;
    connect?: ArtworkWhereUniqueInput[] | undefined;
}
