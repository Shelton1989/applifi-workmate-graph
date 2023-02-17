import { BookingOrderCreateOrConnectWithoutTransactionsInput } from "../inputs/BookingOrderCreateOrConnectWithoutTransactionsInput";
import { BookingOrderCreateWithoutTransactionsInput } from "../inputs/BookingOrderCreateWithoutTransactionsInput";
import { BookingOrderWhereUniqueInput } from "../inputs/BookingOrderWhereUniqueInput";
export declare class BookingOrderCreateNestedOneWithoutTransactionsInput {
    create?: BookingOrderCreateWithoutTransactionsInput | undefined;
    connectOrCreate?: BookingOrderCreateOrConnectWithoutTransactionsInput | undefined;
    connect?: BookingOrderWhereUniqueInput | undefined;
}
