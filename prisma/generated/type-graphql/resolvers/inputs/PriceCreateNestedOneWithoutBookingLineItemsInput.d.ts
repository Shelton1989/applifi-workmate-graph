import { PriceCreateOrConnectWithoutBookingLineItemsInput } from "../inputs/PriceCreateOrConnectWithoutBookingLineItemsInput";
import { PriceCreateWithoutBookingLineItemsInput } from "../inputs/PriceCreateWithoutBookingLineItemsInput";
import { PriceWhereUniqueInput } from "../inputs/PriceWhereUniqueInput";
export declare class PriceCreateNestedOneWithoutBookingLineItemsInput {
    create?: PriceCreateWithoutBookingLineItemsInput | undefined;
    connectOrCreate?: PriceCreateOrConnectWithoutBookingLineItemsInput | undefined;
    connect?: PriceWhereUniqueInput | undefined;
}
