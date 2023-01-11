import { BookingOrderLineItemCreateManyLineItemPriceInputEnvelope } from "../inputs/BookingOrderLineItemCreateManyLineItemPriceInputEnvelope";
import { BookingOrderLineItemCreateOrConnectWithoutLineItemPriceInput } from "../inputs/BookingOrderLineItemCreateOrConnectWithoutLineItemPriceInput";
import { BookingOrderLineItemCreateWithoutLineItemPriceInput } from "../inputs/BookingOrderLineItemCreateWithoutLineItemPriceInput";
import { BookingOrderLineItemWhereUniqueInput } from "../inputs/BookingOrderLineItemWhereUniqueInput";
export declare class BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput {
    create?: BookingOrderLineItemCreateWithoutLineItemPriceInput[] | undefined;
    connectOrCreate?: BookingOrderLineItemCreateOrConnectWithoutLineItemPriceInput[] | undefined;
    createMany?: BookingOrderLineItemCreateManyLineItemPriceInputEnvelope | undefined;
    connect?: BookingOrderLineItemWhereUniqueInput[] | undefined;
}
