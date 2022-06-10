import { UserCreateOrConnectWithoutLikedProductsInput } from "../inputs/UserCreateOrConnectWithoutLikedProductsInput";
import { UserCreateWithoutLikedProductsInput } from "../inputs/UserCreateWithoutLikedProductsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedManyWithoutLikedProductsInput {
    create?: UserCreateWithoutLikedProductsInput[] | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutLikedProductsInput[] | undefined;
    connect?: UserWhereUniqueInput[] | undefined;
}
