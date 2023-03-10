import { WardCreateOrConnectWithoutUsersInput } from "../inputs/WardCreateOrConnectWithoutUsersInput";
import { WardCreateWithoutUsersInput } from "../inputs/WardCreateWithoutUsersInput";
import { WardWhereUniqueInput } from "../inputs/WardWhereUniqueInput";
export declare class WardCreateNestedOneWithoutUsersInput {
    create?: WardCreateWithoutUsersInput | undefined;
    connectOrCreate?: WardCreateOrConnectWithoutUsersInput | undefined;
    connect?: WardWhereUniqueInput | undefined;
}
