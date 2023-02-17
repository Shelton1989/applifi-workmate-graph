import { BookingOrderCreateOrConnectWithoutTransactionsInput } from "../inputs/BookingOrderCreateOrConnectWithoutTransactionsInput";
import { BookingOrderCreateWithoutTransactionsInput } from "../inputs/BookingOrderCreateWithoutTransactionsInput";
import { BookingOrderUpdateWithoutTransactionsInput } from "../inputs/BookingOrderUpdateWithoutTransactionsInput";
import { BookingOrderUpsertWithoutTransactionsInput } from "../inputs/BookingOrderUpsertWithoutTransactionsInput";
import { BookingOrderWhereUniqueInput } from "../inputs/BookingOrderWhereUniqueInput";
export declare class BookingOrderUpdateOneRequiredWithoutTransactionsInput {
    create?: BookingOrderCreateWithoutTransactionsInput | undefined;
    connectOrCreate?: BookingOrderCreateOrConnectWithoutTransactionsInput | undefined;
    upsert?: BookingOrderUpsertWithoutTransactionsInput | undefined;
    connect?: BookingOrderWhereUniqueInput | undefined;
    update?: BookingOrderUpdateWithoutTransactionsInput | undefined;
}
