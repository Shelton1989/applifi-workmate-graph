import { UserCreateOrConnectWithoutLikedProductsInput } from "../inputs/UserCreateOrConnectWithoutLikedProductsInput";
import { UserCreateWithoutLikedProductsInput } from "../inputs/UserCreateWithoutLikedProductsInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutLikedProductsInput } from "../inputs/UserUpdateManyWithWhereWithoutLikedProductsInput";
import { UserUpdateWithWhereUniqueWithoutLikedProductsInput } from "../inputs/UserUpdateWithWhereUniqueWithoutLikedProductsInput";
import { UserUpsertWithWhereUniqueWithoutLikedProductsInput } from "../inputs/UserUpsertWithWhereUniqueWithoutLikedProductsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateManyWithoutLikedProductsInput {
    create?: UserCreateWithoutLikedProductsInput[] | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutLikedProductsInput[] | undefined;
    upsert?: UserUpsertWithWhereUniqueWithoutLikedProductsInput[] | undefined;
    set?: UserWhereUniqueInput[] | undefined;
    disconnect?: UserWhereUniqueInput[] | undefined;
    delete?: UserWhereUniqueInput[] | undefined;
    connect?: UserWhereUniqueInput[] | undefined;
    update?: UserUpdateWithWhereUniqueWithoutLikedProductsInput[] | undefined;
    updateMany?: UserUpdateManyWithWhereWithoutLikedProductsInput[] | undefined;
    deleteMany?: UserScalarWhereInput[] | undefined;
}
