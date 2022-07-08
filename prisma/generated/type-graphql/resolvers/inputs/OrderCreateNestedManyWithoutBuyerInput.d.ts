import { OrderCreateManyBuyerInputEnvelope } from "../inputs/OrderCreateManyBuyerInputEnvelope";
import { OrderCreateOrConnectWithoutBuyerInput } from "../inputs/OrderCreateOrConnectWithoutBuyerInput";
import { OrderCreateWithoutBuyerInput } from "../inputs/OrderCreateWithoutBuyerInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderCreateNestedManyWithoutBuyerInput {
    create?: OrderCreateWithoutBuyerInput[] | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutBuyerInput[] | undefined;
    createMany?: OrderCreateManyBuyerInputEnvelope | undefined;
    connect?: OrderWhereUniqueInput[] | undefined;
}
