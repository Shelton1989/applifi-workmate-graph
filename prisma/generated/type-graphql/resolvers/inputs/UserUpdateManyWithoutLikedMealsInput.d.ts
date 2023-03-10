import { UserCreateOrConnectWithoutLikedMealsInput } from "../inputs/UserCreateOrConnectWithoutLikedMealsInput";
import { UserCreateWithoutLikedMealsInput } from "../inputs/UserCreateWithoutLikedMealsInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutLikedMealsInput } from "../inputs/UserUpdateManyWithWhereWithoutLikedMealsInput";
import { UserUpdateWithWhereUniqueWithoutLikedMealsInput } from "../inputs/UserUpdateWithWhereUniqueWithoutLikedMealsInput";
import { UserUpsertWithWhereUniqueWithoutLikedMealsInput } from "../inputs/UserUpsertWithWhereUniqueWithoutLikedMealsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateManyWithoutLikedMealsInput {
    create?: UserCreateWithoutLikedMealsInput[] | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutLikedMealsInput[] | undefined;
    upsert?: UserUpsertWithWhereUniqueWithoutLikedMealsInput[] | undefined;
    set?: UserWhereUniqueInput[] | undefined;
    disconnect?: UserWhereUniqueInput[] | undefined;
    delete?: UserWhereUniqueInput[] | undefined;
    connect?: UserWhereUniqueInput[] | undefined;
    update?: UserUpdateWithWhereUniqueWithoutLikedMealsInput[] | undefined;
    updateMany?: UserUpdateManyWithWhereWithoutLikedMealsInput[] | undefined;
    deleteMany?: UserScalarWhereInput[] | undefined;
}
