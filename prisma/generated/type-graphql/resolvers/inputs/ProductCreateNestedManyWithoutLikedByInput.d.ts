import { ProductCreateOrConnectWithoutLikedByInput } from "../inputs/ProductCreateOrConnectWithoutLikedByInput";
import { ProductCreateWithoutLikedByInput } from "../inputs/ProductCreateWithoutLikedByInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductCreateNestedManyWithoutLikedByInput {
    create?: ProductCreateWithoutLikedByInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutLikedByInput[] | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
}
