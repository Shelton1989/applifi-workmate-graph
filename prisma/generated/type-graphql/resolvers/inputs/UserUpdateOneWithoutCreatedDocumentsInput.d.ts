import { UserCreateOrConnectWithoutCreatedDocumentsInput } from "../inputs/UserCreateOrConnectWithoutCreatedDocumentsInput";
import { UserCreateWithoutCreatedDocumentsInput } from "../inputs/UserCreateWithoutCreatedDocumentsInput";
import { UserUpdateWithoutCreatedDocumentsInput } from "../inputs/UserUpdateWithoutCreatedDocumentsInput";
import { UserUpsertWithoutCreatedDocumentsInput } from "../inputs/UserUpsertWithoutCreatedDocumentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneWithoutCreatedDocumentsInput {
    create?: UserCreateWithoutCreatedDocumentsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutCreatedDocumentsInput | undefined;
    upsert?: UserUpsertWithoutCreatedDocumentsInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutCreatedDocumentsInput | undefined;
}
