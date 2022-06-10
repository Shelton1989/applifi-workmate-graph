import { AddressCreateOrConnectWithoutOrdersInput } from "../inputs/AddressCreateOrConnectWithoutOrdersInput";
import { AddressCreateWithoutOrdersInput } from "../inputs/AddressCreateWithoutOrdersInput";
import { AddressUpdateWithoutOrdersInput } from "../inputs/AddressUpdateWithoutOrdersInput";
import { AddressUpsertWithoutOrdersInput } from "../inputs/AddressUpsertWithoutOrdersInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";
export declare class AddressUpdateOneWithoutOrdersInput {
    create?: AddressCreateWithoutOrdersInput | undefined;
    connectOrCreate?: AddressCreateOrConnectWithoutOrdersInput | undefined;
    upsert?: AddressUpsertWithoutOrdersInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: AddressWhereUniqueInput | undefined;
    update?: AddressUpdateWithoutOrdersInput | undefined;
}
