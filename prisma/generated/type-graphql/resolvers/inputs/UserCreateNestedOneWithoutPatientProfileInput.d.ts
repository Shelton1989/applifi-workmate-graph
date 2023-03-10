import { UserCreateOrConnectWithoutPatientProfileInput } from "../inputs/UserCreateOrConnectWithoutPatientProfileInput";
import { UserCreateWithoutPatientProfileInput } from "../inputs/UserCreateWithoutPatientProfileInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutPatientProfileInput {
    create?: UserCreateWithoutPatientProfileInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutPatientProfileInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
