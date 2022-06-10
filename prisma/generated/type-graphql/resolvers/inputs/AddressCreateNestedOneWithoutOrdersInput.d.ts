import { AddressCreateOrConnectWithoutOrdersInput } from "../inputs/AddressCreateOrConnectWithoutOrdersInput";
import { AddressCreateWithoutOrdersInput } from "../inputs/AddressCreateWithoutOrdersInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";
export declare class AddressCreateNestedOneWithoutOrdersInput {
    create?: AddressCreateWithoutOrdersInput | undefined;
    connectOrCreate?: AddressCreateOrConnectWithoutOrdersInput | undefined;
    connect?: AddressWhereUniqueInput | undefined;
}
