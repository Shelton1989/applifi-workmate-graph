import { OrderLineItemCreateManySelectedSizeInputEnvelope } from "../inputs/OrderLineItemCreateManySelectedSizeInputEnvelope";
import { OrderLineItemCreateOrConnectWithoutSelectedSizeInput } from "../inputs/OrderLineItemCreateOrConnectWithoutSelectedSizeInput";
import { OrderLineItemCreateWithoutSelectedSizeInput } from "../inputs/OrderLineItemCreateWithoutSelectedSizeInput";
import { OrderLineItemWhereUniqueInput } from "../inputs/OrderLineItemWhereUniqueInput";
export declare class OrderLineItemCreateNestedManyWithoutSelectedSizeInput {
    create?: OrderLineItemCreateWithoutSelectedSizeInput[] | undefined;
    connectOrCreate?: OrderLineItemCreateOrConnectWithoutSelectedSizeInput[] | undefined;
    createMany?: OrderLineItemCreateManySelectedSizeInputEnvelope | undefined;
    connect?: OrderLineItemWhereUniqueInput[] | undefined;
}
