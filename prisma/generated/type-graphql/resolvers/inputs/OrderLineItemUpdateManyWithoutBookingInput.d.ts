import { OrderLineItemCreateManyBookingInputEnvelope } from "../inputs/OrderLineItemCreateManyBookingInputEnvelope";
import { OrderLineItemCreateOrConnectWithoutBookingInput } from "../inputs/OrderLineItemCreateOrConnectWithoutBookingInput";
import { OrderLineItemCreateWithoutBookingInput } from "../inputs/OrderLineItemCreateWithoutBookingInput";
import { OrderLineItemScalarWhereInput } from "../inputs/OrderLineItemScalarWhereInput";
import { OrderLineItemUpdateManyWithWhereWithoutBookingInput } from "../inputs/OrderLineItemUpdateManyWithWhereWithoutBookingInput";
import { OrderLineItemUpdateWithWhereUniqueWithoutBookingInput } from "../inputs/OrderLineItemUpdateWithWhereUniqueWithoutBookingInput";
import { OrderLineItemUpsertWithWhereUniqueWithoutBookingInput } from "../inputs/OrderLineItemUpsertWithWhereUniqueWithoutBookingInput";
import { OrderLineItemWhereUniqueInput } from "../inputs/OrderLineItemWhereUniqueInput";
export declare class OrderLineItemUpdateManyWithoutBookingInput {
    create?: OrderLineItemCreateWithoutBookingInput[] | undefined;
    connectOrCreate?: OrderLineItemCreateOrConnectWithoutBookingInput[] | undefined;
    upsert?: OrderLineItemUpsertWithWhereUniqueWithoutBookingInput[] | undefined;
    createMany?: OrderLineItemCreateManyBookingInputEnvelope | undefined;
    set?: OrderLineItemWhereUniqueInput[] | undefined;
    disconnect?: OrderLineItemWhereUniqueInput[] | undefined;
    delete?: OrderLineItemWhereUniqueInput[] | undefined;
    connect?: OrderLineItemWhereUniqueInput[] | undefined;
    update?: OrderLineItemUpdateWithWhereUniqueWithoutBookingInput[] | undefined;
    updateMany?: OrderLineItemUpdateManyWithWhereWithoutBookingInput[] | undefined;
    deleteMany?: OrderLineItemScalarWhereInput[] | undefined;
}
