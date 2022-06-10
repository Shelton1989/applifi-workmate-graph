import { UserCreateOrConnectWithoutOrderInput } from "../inputs/UserCreateOrConnectWithoutOrderInput";
import { UserCreateWithoutOrderInput } from "../inputs/UserCreateWithoutOrderInput";
import { UserUpdateWithoutOrderInput } from "../inputs/UserUpdateWithoutOrderInput";
import { UserUpsertWithoutOrderInput } from "../inputs/UserUpsertWithoutOrderInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutOrderInput {
    create?: UserCreateWithoutOrderInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutOrderInput | undefined;
    upsert?: UserUpsertWithoutOrderInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutOrderInput | undefined;
}
