import { UserCreateOrConnectWithoutRequestsInput } from "../inputs/UserCreateOrConnectWithoutRequestsInput";
import { UserCreateWithoutRequestsInput } from "../inputs/UserCreateWithoutRequestsInput";
import { UserUpdateWithoutRequestsInput } from "../inputs/UserUpdateWithoutRequestsInput";
import { UserUpsertWithoutRequestsInput } from "../inputs/UserUpsertWithoutRequestsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutRequestsInput {
    create?: UserCreateWithoutRequestsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutRequestsInput | undefined;
    upsert?: UserUpsertWithoutRequestsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutRequestsInput | undefined;
}
