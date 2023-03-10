import { WardCreateOrConnectWithoutUsersInput } from "../inputs/WardCreateOrConnectWithoutUsersInput";
import { WardCreateWithoutUsersInput } from "../inputs/WardCreateWithoutUsersInput";
import { WardUpdateWithoutUsersInput } from "../inputs/WardUpdateWithoutUsersInput";
import { WardUpsertWithoutUsersInput } from "../inputs/WardUpsertWithoutUsersInput";
import { WardWhereUniqueInput } from "../inputs/WardWhereUniqueInput";
export declare class WardUpdateOneWithoutUsersInput {
    create?: WardCreateWithoutUsersInput | undefined;
    connectOrCreate?: WardCreateOrConnectWithoutUsersInput | undefined;
    upsert?: WardUpsertWithoutUsersInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: WardWhereUniqueInput | undefined;
    update?: WardUpdateWithoutUsersInput | undefined;
}
