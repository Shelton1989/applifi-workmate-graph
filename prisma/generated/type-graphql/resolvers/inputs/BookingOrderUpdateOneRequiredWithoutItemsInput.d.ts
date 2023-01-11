import { BookingOrderCreateOrConnectWithoutItemsInput } from "../inputs/BookingOrderCreateOrConnectWithoutItemsInput";
import { BookingOrderCreateWithoutItemsInput } from "../inputs/BookingOrderCreateWithoutItemsInput";
import { BookingOrderUpdateWithoutItemsInput } from "../inputs/BookingOrderUpdateWithoutItemsInput";
import { BookingOrderUpsertWithoutItemsInput } from "../inputs/BookingOrderUpsertWithoutItemsInput";
import { BookingOrderWhereUniqueInput } from "../inputs/BookingOrderWhereUniqueInput";
export declare class BookingOrderUpdateOneRequiredWithoutItemsInput {
    create?: BookingOrderCreateWithoutItemsInput | undefined;
    connectOrCreate?: BookingOrderCreateOrConnectWithoutItemsInput | undefined;
    upsert?: BookingOrderUpsertWithoutItemsInput | undefined;
    connect?: BookingOrderWhereUniqueInput | undefined;
    update?: BookingOrderUpdateWithoutItemsInput | undefined;
}
