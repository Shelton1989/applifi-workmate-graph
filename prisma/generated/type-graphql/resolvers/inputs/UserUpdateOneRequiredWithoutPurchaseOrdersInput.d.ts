import { UserCreateOrConnectWithoutPurchaseOrdersInput } from "../inputs/UserCreateOrConnectWithoutPurchaseOrdersInput";
import { UserCreateWithoutPurchaseOrdersInput } from "../inputs/UserCreateWithoutPurchaseOrdersInput";
import { UserUpdateWithoutPurchaseOrdersInput } from "../inputs/UserUpdateWithoutPurchaseOrdersInput";
import { UserUpsertWithoutPurchaseOrdersInput } from "../inputs/UserUpsertWithoutPurchaseOrdersInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutPurchaseOrdersInput {
    create?: UserCreateWithoutPurchaseOrdersInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutPurchaseOrdersInput | undefined;
    upsert?: UserUpsertWithoutPurchaseOrdersInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutPurchaseOrdersInput | undefined;
}
