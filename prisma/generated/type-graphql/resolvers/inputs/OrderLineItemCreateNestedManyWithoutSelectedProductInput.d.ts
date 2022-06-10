import { OrderLineItemCreateManySelectedProductInputEnvelope } from "../inputs/OrderLineItemCreateManySelectedProductInputEnvelope";
import { OrderLineItemCreateOrConnectWithoutSelectedProductInput } from "../inputs/OrderLineItemCreateOrConnectWithoutSelectedProductInput";
import { OrderLineItemCreateWithoutSelectedProductInput } from "../inputs/OrderLineItemCreateWithoutSelectedProductInput";
import { OrderLineItemWhereUniqueInput } from "../inputs/OrderLineItemWhereUniqueInput";
export declare class OrderLineItemCreateNestedManyWithoutSelectedProductInput {
    create?: OrderLineItemCreateWithoutSelectedProductInput[] | undefined;
    connectOrCreate?: OrderLineItemCreateOrConnectWithoutSelectedProductInput[] | undefined;
    createMany?: OrderLineItemCreateManySelectedProductInputEnvelope | undefined;
    connect?: OrderLineItemWhereUniqueInput[] | undefined;
}
