import { BookingOrderLineItemCreateManyBookingInputEnvelope } from "../inputs/BookingOrderLineItemCreateManyBookingInputEnvelope";
import { BookingOrderLineItemCreateOrConnectWithoutBookingInput } from "../inputs/BookingOrderLineItemCreateOrConnectWithoutBookingInput";
import { BookingOrderLineItemCreateWithoutBookingInput } from "../inputs/BookingOrderLineItemCreateWithoutBookingInput";
import { BookingOrderLineItemWhereUniqueInput } from "../inputs/BookingOrderLineItemWhereUniqueInput";
export declare class BookingOrderLineItemCreateNestedManyWithoutBookingInput {
    create?: BookingOrderLineItemCreateWithoutBookingInput[] | undefined;
    connectOrCreate?: BookingOrderLineItemCreateOrConnectWithoutBookingInput[] | undefined;
    createMany?: BookingOrderLineItemCreateManyBookingInputEnvelope | undefined;
    connect?: BookingOrderLineItemWhereUniqueInput[] | undefined;
}
