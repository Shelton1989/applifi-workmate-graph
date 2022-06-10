import { OrderLineItemCreateManyLineItemPriceInputEnvelope } from "../inputs/OrderLineItemCreateManyLineItemPriceInputEnvelope";
import { OrderLineItemCreateOrConnectWithoutLineItemPriceInput } from "../inputs/OrderLineItemCreateOrConnectWithoutLineItemPriceInput";
import { OrderLineItemCreateWithoutLineItemPriceInput } from "../inputs/OrderLineItemCreateWithoutLineItemPriceInput";
import { OrderLineItemWhereUniqueInput } from "../inputs/OrderLineItemWhereUniqueInput";
export declare class OrderLineItemCreateNestedManyWithoutLineItemPriceInput {
    create?: OrderLineItemCreateWithoutLineItemPriceInput[] | undefined;
    connectOrCreate?: OrderLineItemCreateOrConnectWithoutLineItemPriceInput[] | undefined;
    createMany?: OrderLineItemCreateManyLineItemPriceInputEnvelope | undefined;
    connect?: OrderLineItemWhereUniqueInput[] | undefined;
}
