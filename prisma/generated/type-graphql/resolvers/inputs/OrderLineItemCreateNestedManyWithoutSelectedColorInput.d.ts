import { OrderLineItemCreateManySelectedColorInputEnvelope } from "../inputs/OrderLineItemCreateManySelectedColorInputEnvelope";
import { OrderLineItemCreateOrConnectWithoutSelectedColorInput } from "../inputs/OrderLineItemCreateOrConnectWithoutSelectedColorInput";
import { OrderLineItemCreateWithoutSelectedColorInput } from "../inputs/OrderLineItemCreateWithoutSelectedColorInput";
import { OrderLineItemWhereUniqueInput } from "../inputs/OrderLineItemWhereUniqueInput";
export declare class OrderLineItemCreateNestedManyWithoutSelectedColorInput {
    create?: OrderLineItemCreateWithoutSelectedColorInput[] | undefined;
    connectOrCreate?: OrderLineItemCreateOrConnectWithoutSelectedColorInput[] | undefined;
    createMany?: OrderLineItemCreateManySelectedColorInputEnvelope | undefined;
    connect?: OrderLineItemWhereUniqueInput[] | undefined;
}
