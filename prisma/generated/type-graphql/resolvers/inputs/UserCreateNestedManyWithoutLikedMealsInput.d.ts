import { UserCreateOrConnectWithoutLikedMealsInput } from "../inputs/UserCreateOrConnectWithoutLikedMealsInput";
import { UserCreateWithoutLikedMealsInput } from "../inputs/UserCreateWithoutLikedMealsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedManyWithoutLikedMealsInput {
    create?: UserCreateWithoutLikedMealsInput[] | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutLikedMealsInput[] | undefined;
    connect?: UserWhereUniqueInput[] | undefined;
}
