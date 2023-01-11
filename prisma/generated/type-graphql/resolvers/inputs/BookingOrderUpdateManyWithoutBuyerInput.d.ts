import { BookingOrderCreateManyBuyerInputEnvelope } from "../inputs/BookingOrderCreateManyBuyerInputEnvelope";
import { BookingOrderCreateOrConnectWithoutBuyerInput } from "../inputs/BookingOrderCreateOrConnectWithoutBuyerInput";
import { BookingOrderCreateWithoutBuyerInput } from "../inputs/BookingOrderCreateWithoutBuyerInput";
import { BookingOrderScalarWhereInput } from "../inputs/BookingOrderScalarWhereInput";
import { BookingOrderUpdateManyWithWhereWithoutBuyerInput } from "../inputs/BookingOrderUpdateManyWithWhereWithoutBuyerInput";
import { BookingOrderUpdateWithWhereUniqueWithoutBuyerInput } from "../inputs/BookingOrderUpdateWithWhereUniqueWithoutBuyerInput";
import { BookingOrderUpsertWithWhereUniqueWithoutBuyerInput } from "../inputs/BookingOrderUpsertWithWhereUniqueWithoutBuyerInput";
import { BookingOrderWhereUniqueInput } from "../inputs/BookingOrderWhereUniqueInput";
export declare class BookingOrderUpdateManyWithoutBuyerInput {
    create?: BookingOrderCreateWithoutBuyerInput[] | undefined;
    connectOrCreate?: BookingOrderCreateOrConnectWithoutBuyerInput[] | undefined;
    upsert?: BookingOrderUpsertWithWhereUniqueWithoutBuyerInput[] | undefined;
    createMany?: BookingOrderCreateManyBuyerInputEnvelope | undefined;
    set?: BookingOrderWhereUniqueInput[] | undefined;
    disconnect?: BookingOrderWhereUniqueInput[] | undefined;
    delete?: BookingOrderWhereUniqueInput[] | undefined;
    connect?: BookingOrderWhereUniqueInput[] | undefined;
    update?: BookingOrderUpdateWithWhereUniqueWithoutBuyerInput[] | undefined;
    updateMany?: BookingOrderUpdateManyWithWhereWithoutBuyerInput[] | undefined;
    deleteMany?: BookingOrderScalarWhereInput[] | undefined;
}
