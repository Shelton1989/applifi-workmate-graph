import { UserCreateOrConnectWithoutInventoryInput } from "../inputs/UserCreateOrConnectWithoutInventoryInput";
import { UserCreateWithoutInventoryInput } from "../inputs/UserCreateWithoutInventoryInput";
import { UserUpdateWithoutInventoryInput } from "../inputs/UserUpdateWithoutInventoryInput";
import { UserUpsertWithoutInventoryInput } from "../inputs/UserUpsertWithoutInventoryInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutInventoryInput {
    create?: UserCreateWithoutInventoryInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutInventoryInput | undefined;
    upsert?: UserUpsertWithoutInventoryInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutInventoryInput | undefined;
}
