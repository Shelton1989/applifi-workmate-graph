import { BookingOrderLineItemCreateManyLineItemPriceInputEnvelope } from "../inputs/BookingOrderLineItemCreateManyLineItemPriceInputEnvelope";
import { BookingOrderLineItemCreateOrConnectWithoutLineItemPriceInput } from "../inputs/BookingOrderLineItemCreateOrConnectWithoutLineItemPriceInput";
import { BookingOrderLineItemCreateWithoutLineItemPriceInput } from "../inputs/BookingOrderLineItemCreateWithoutLineItemPriceInput";
import { BookingOrderLineItemScalarWhereInput } from "../inputs/BookingOrderLineItemScalarWhereInput";
import { BookingOrderLineItemUpdateManyWithWhereWithoutLineItemPriceInput } from "../inputs/BookingOrderLineItemUpdateManyWithWhereWithoutLineItemPriceInput";
import { BookingOrderLineItemUpdateWithWhereUniqueWithoutLineItemPriceInput } from "../inputs/BookingOrderLineItemUpdateWithWhereUniqueWithoutLineItemPriceInput";
import { BookingOrderLineItemUpsertWithWhereUniqueWithoutLineItemPriceInput } from "../inputs/BookingOrderLineItemUpsertWithWhereUniqueWithoutLineItemPriceInput";
import { BookingOrderLineItemWhereUniqueInput } from "../inputs/BookingOrderLineItemWhereUniqueInput";
export declare class BookingOrderLineItemUpdateManyWithoutLineItemPriceInput {
    create?: BookingOrderLineItemCreateWithoutLineItemPriceInput[] | undefined;
    connectOrCreate?: BookingOrderLineItemCreateOrConnectWithoutLineItemPriceInput[] | undefined;
    upsert?: BookingOrderLineItemUpsertWithWhereUniqueWithoutLineItemPriceInput[] | undefined;
    createMany?: BookingOrderLineItemCreateManyLineItemPriceInputEnvelope | undefined;
    set?: BookingOrderLineItemWhereUniqueInput[] | undefined;
    disconnect?: BookingOrderLineItemWhereUniqueInput[] | undefined;
    delete?: BookingOrderLineItemWhereUniqueInput[] | undefined;
    connect?: BookingOrderLineItemWhereUniqueInput[] | undefined;
    update?: BookingOrderLineItemUpdateWithWhereUniqueWithoutLineItemPriceInput[] | undefined;
    updateMany?: BookingOrderLineItemUpdateManyWithWhereWithoutLineItemPriceInput[] | undefined;
    deleteMany?: BookingOrderLineItemScalarWhereInput[] | undefined;
}
