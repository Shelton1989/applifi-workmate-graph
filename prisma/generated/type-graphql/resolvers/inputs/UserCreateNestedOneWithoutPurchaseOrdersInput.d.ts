import { UserCreateOrConnectWithoutPurchaseOrdersInput } from "../inputs/UserCreateOrConnectWithoutPurchaseOrdersInput";
import { UserCreateWithoutPurchaseOrdersInput } from "../inputs/UserCreateWithoutPurchaseOrdersInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutPurchaseOrdersInput {
    create?: UserCreateWithoutPurchaseOrdersInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutPurchaseOrdersInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
