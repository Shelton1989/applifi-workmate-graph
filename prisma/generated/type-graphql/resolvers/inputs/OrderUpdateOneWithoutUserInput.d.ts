import { OrderCreateOrConnectWithoutUserInput } from "../inputs/OrderCreateOrConnectWithoutUserInput";
import { OrderCreateWithoutUserInput } from "../inputs/OrderCreateWithoutUserInput";
import { OrderUpdateWithoutUserInput } from "../inputs/OrderUpdateWithoutUserInput";
import { OrderUpsertWithoutUserInput } from "../inputs/OrderUpsertWithoutUserInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderUpdateOneWithoutUserInput {
    create?: OrderCreateWithoutUserInput | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | undefined;
    upsert?: OrderUpsertWithoutUserInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: OrderWhereUniqueInput | undefined;
    update?: OrderUpdateWithoutUserInput | undefined;
}
