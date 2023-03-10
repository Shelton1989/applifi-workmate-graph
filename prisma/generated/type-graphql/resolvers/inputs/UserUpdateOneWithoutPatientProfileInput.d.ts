import { UserCreateOrConnectWithoutPatientProfileInput } from "../inputs/UserCreateOrConnectWithoutPatientProfileInput";
import { UserCreateWithoutPatientProfileInput } from "../inputs/UserCreateWithoutPatientProfileInput";
import { UserUpdateWithoutPatientProfileInput } from "../inputs/UserUpdateWithoutPatientProfileInput";
import { UserUpsertWithoutPatientProfileInput } from "../inputs/UserUpsertWithoutPatientProfileInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneWithoutPatientProfileInput {
    create?: UserCreateWithoutPatientProfileInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutPatientProfileInput | undefined;
    upsert?: UserUpsertWithoutPatientProfileInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutPatientProfileInput | undefined;
}
