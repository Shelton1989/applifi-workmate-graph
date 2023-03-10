import { OrderLineItemCreateManyBookingInputEnvelope } from "../inputs/OrderLineItemCreateManyBookingInputEnvelope";
import { OrderLineItemCreateOrConnectWithoutBookingInput } from "../inputs/OrderLineItemCreateOrConnectWithoutBookingInput";
import { OrderLineItemCreateWithoutBookingInput } from "../inputs/OrderLineItemCreateWithoutBookingInput";
import { OrderLineItemWhereUniqueInput } from "../inputs/OrderLineItemWhereUniqueInput";
export declare class OrderLineItemCreateNestedManyWithoutBookingInput {
    create?: OrderLineItemCreateWithoutBookingInput[] | undefined;
    connectOrCreate?: OrderLineItemCreateOrConnectWithoutBookingInput[] | undefined;
    createMany?: OrderLineItemCreateManyBookingInputEnvelope | undefined;
    connect?: OrderLineItemWhereUniqueInput[] | undefined;
}
