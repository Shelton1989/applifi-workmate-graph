import { OrderCreateOrConnectWithoutUserInput } from "../inputs/OrderCreateOrConnectWithoutUserInput";
import { OrderCreateWithoutUserInput } from "../inputs/OrderCreateWithoutUserInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderCreateNestedOneWithoutUserInput {
    create?: OrderCreateWithoutUserInput | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | undefined;
    connect?: OrderWhereUniqueInput | undefined;
}
