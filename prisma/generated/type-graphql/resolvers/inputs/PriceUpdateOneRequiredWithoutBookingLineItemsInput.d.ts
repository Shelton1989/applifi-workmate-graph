import { PriceCreateOrConnectWithoutBookingLineItemsInput } from "../inputs/PriceCreateOrConnectWithoutBookingLineItemsInput";
import { PriceCreateWithoutBookingLineItemsInput } from "../inputs/PriceCreateWithoutBookingLineItemsInput";
import { PriceUpdateWithoutBookingLineItemsInput } from "../inputs/PriceUpdateWithoutBookingLineItemsInput";
import { PriceUpsertWithoutBookingLineItemsInput } from "../inputs/PriceUpsertWithoutBookingLineItemsInput";
import { PriceWhereUniqueInput } from "../inputs/PriceWhereUniqueInput";
export declare class PriceUpdateOneRequiredWithoutBookingLineItemsInput {
    create?: PriceCreateWithoutBookingLineItemsInput | undefined;
    connectOrCreate?: PriceCreateOrConnectWithoutBookingLineItemsInput | undefined;
    upsert?: PriceUpsertWithoutBookingLineItemsInput | undefined;
    connect?: PriceWhereUniqueInput | undefined;
    update?: PriceUpdateWithoutBookingLineItemsInput | undefined;
}
