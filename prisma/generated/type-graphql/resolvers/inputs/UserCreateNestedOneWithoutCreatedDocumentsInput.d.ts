import { UserCreateOrConnectWithoutCreatedDocumentsInput } from "../inputs/UserCreateOrConnectWithoutCreatedDocumentsInput";
import { UserCreateWithoutCreatedDocumentsInput } from "../inputs/UserCreateWithoutCreatedDocumentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutCreatedDocumentsInput {
    create?: UserCreateWithoutCreatedDocumentsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutCreatedDocumentsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
