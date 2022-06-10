import { OrderLineItemOrderByWithRelationInput } from "../../../inputs/OrderLineItemOrderByWithRelationInput";
import { OrderLineItemWhereInput } from "../../../inputs/OrderLineItemWhereInput";
import { OrderLineItemWhereUniqueInput } from "../../../inputs/OrderLineItemWhereUniqueInput";
export declare class AggregateOrderLineItemArgs {
    where?: OrderLineItemWhereInput | undefined;
    orderBy?: OrderLineItemOrderByWithRelationInput[] | undefined;
    cursor?: OrderLineItemWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
