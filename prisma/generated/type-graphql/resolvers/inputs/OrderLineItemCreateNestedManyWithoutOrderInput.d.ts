import { OrderLineItemCreateManyOrderInputEnvelope } from "../inputs/OrderLineItemCreateManyOrderInputEnvelope";
import { OrderLineItemCreateOrConnectWithoutOrderInput } from "../inputs/OrderLineItemCreateOrConnectWithoutOrderInput";
import { OrderLineItemCreateWithoutOrderInput } from "../inputs/OrderLineItemCreateWithoutOrderInput";
import { OrderLineItemWhereUniqueInput } from "../inputs/OrderLineItemWhereUniqueInput";
export declare class OrderLineItemCreateNestedManyWithoutOrderInput {
    create?: OrderLineItemCreateWithoutOrderInput[] | undefined;
    connectOrCreate?: OrderLineItemCreateOrConnectWithoutOrderInput[] | undefined;
    createMany?: OrderLineItemCreateManyOrderInputEnvelope | undefined;
    connect?: OrderLineItemWhereUniqueInput[] | undefined;
}
