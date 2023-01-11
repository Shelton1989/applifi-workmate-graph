import { BookingOrderLineItemCreateManyBookingInputEnvelope } from "../inputs/BookingOrderLineItemCreateManyBookingInputEnvelope";
import { BookingOrderLineItemCreateOrConnectWithoutBookingInput } from "../inputs/BookingOrderLineItemCreateOrConnectWithoutBookingInput";
import { BookingOrderLineItemCreateWithoutBookingInput } from "../inputs/BookingOrderLineItemCreateWithoutBookingInput";
import { BookingOrderLineItemScalarWhereInput } from "../inputs/BookingOrderLineItemScalarWhereInput";
import { BookingOrderLineItemUpdateManyWithWhereWithoutBookingInput } from "../inputs/BookingOrderLineItemUpdateManyWithWhereWithoutBookingInput";
import { BookingOrderLineItemUpdateWithWhereUniqueWithoutBookingInput } from "../inputs/BookingOrderLineItemUpdateWithWhereUniqueWithoutBookingInput";
import { BookingOrderLineItemUpsertWithWhereUniqueWithoutBookingInput } from "../inputs/BookingOrderLineItemUpsertWithWhereUniqueWithoutBookingInput";
import { BookingOrderLineItemWhereUniqueInput } from "../inputs/BookingOrderLineItemWhereUniqueInput";
export declare class BookingOrderLineItemUpdateManyWithoutBookingInput {
    create?: BookingOrderLineItemCreateWithoutBookingInput[] | undefined;
    connectOrCreate?: BookingOrderLineItemCreateOrConnectWithoutBookingInput[] | undefined;
    upsert?: BookingOrderLineItemUpsertWithWhereUniqueWithoutBookingInput[] | undefined;
    createMany?: BookingOrderLineItemCreateManyBookingInputEnvelope | undefined;
    set?: BookingOrderLineItemWhereUniqueInput[] | undefined;
    disconnect?: BookingOrderLineItemWhereUniqueInput[] | undefined;
    delete?: BookingOrderLineItemWhereUniqueInput[] | undefined;
    connect?: BookingOrderLineItemWhereUniqueInput[] | undefined;
    update?: BookingOrderLineItemUpdateWithWhereUniqueWithoutBookingInput[] | undefined;
    updateMany?: BookingOrderLineItemUpdateManyWithWhereWithoutBookingInput[] | undefined;
    deleteMany?: BookingOrderLineItemScalarWhereInput[] | undefined;
}
