import { OrderLineItemCreateManySelectedMealItemInputEnvelope } from "../inputs/OrderLineItemCreateManySelectedMealItemInputEnvelope";
import { OrderLineItemCreateOrConnectWithoutSelectedMealItemInput } from "../inputs/OrderLineItemCreateOrConnectWithoutSelectedMealItemInput";
import { OrderLineItemCreateWithoutSelectedMealItemInput } from "../inputs/OrderLineItemCreateWithoutSelectedMealItemInput";
import { OrderLineItemWhereUniqueInput } from "../inputs/OrderLineItemWhereUniqueInput";
export declare class OrderLineItemCreateNestedManyWithoutSelectedMealItemInput {
    create?: OrderLineItemCreateWithoutSelectedMealItemInput[] | undefined;
    connectOrCreate?: OrderLineItemCreateOrConnectWithoutSelectedMealItemInput[] | undefined;
    createMany?: OrderLineItemCreateManySelectedMealItemInputEnvelope | undefined;
    connect?: OrderLineItemWhereUniqueInput[] | undefined;
}
