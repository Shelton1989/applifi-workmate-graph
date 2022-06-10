import { OrderLineItemCreateInput } from "../../../inputs/OrderLineItemCreateInput";
import { OrderLineItemUpdateInput } from "../../../inputs/OrderLineItemUpdateInput";
import { OrderLineItemWhereUniqueInput } from "../../../inputs/OrderLineItemWhereUniqueInput";
export declare class UpsertOrderLineItemArgs {
    where: OrderLineItemWhereUniqueInput;
    create: OrderLineItemCreateInput;
    update: OrderLineItemUpdateInput;
}
