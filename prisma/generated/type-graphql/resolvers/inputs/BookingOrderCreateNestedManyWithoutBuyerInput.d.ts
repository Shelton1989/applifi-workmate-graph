import { BookingOrderCreateManyBuyerInputEnvelope } from "../inputs/BookingOrderCreateManyBuyerInputEnvelope";
import { BookingOrderCreateOrConnectWithoutBuyerInput } from "../inputs/BookingOrderCreateOrConnectWithoutBuyerInput";
import { BookingOrderCreateWithoutBuyerInput } from "../inputs/BookingOrderCreateWithoutBuyerInput";
import { BookingOrderWhereUniqueInput } from "../inputs/BookingOrderWhereUniqueInput";
export declare class BookingOrderCreateNestedManyWithoutBuyerInput {
    create?: BookingOrderCreateWithoutBuyerInput[] | undefined;
    connectOrCreate?: BookingOrderCreateOrConnectWithoutBuyerInput[] | undefined;
    createMany?: BookingOrderCreateManyBuyerInputEnvelope | undefined;
    connect?: BookingOrderWhereUniqueInput[] | undefined;
}
