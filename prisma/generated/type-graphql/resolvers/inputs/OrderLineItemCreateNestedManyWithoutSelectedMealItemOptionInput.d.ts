import { OrderLineItemCreateManySelectedMealItemOptionInputEnvelope } from "../inputs/OrderLineItemCreateManySelectedMealItemOptionInputEnvelope";
import { OrderLineItemCreateOrConnectWithoutSelectedMealItemOptionInput } from "../inputs/OrderLineItemCreateOrConnectWithoutSelectedMealItemOptionInput";
import { OrderLineItemCreateWithoutSelectedMealItemOptionInput } from "../inputs/OrderLineItemCreateWithoutSelectedMealItemOptionInput";
import { OrderLineItemWhereUniqueInput } from "../inputs/OrderLineItemWhereUniqueInput";
export declare class OrderLineItemCreateNestedManyWithoutSelectedMealItemOptionInput {
    create?: OrderLineItemCreateWithoutSelectedMealItemOptionInput[] | undefined;
    connectOrCreate?: OrderLineItemCreateOrConnectWithoutSelectedMealItemOptionInput[] | undefined;
    createMany?: OrderLineItemCreateManySelectedMealItemOptionInputEnvelope | undefined;
    connect?: OrderLineItemWhereUniqueInput[] | undefined;
}
