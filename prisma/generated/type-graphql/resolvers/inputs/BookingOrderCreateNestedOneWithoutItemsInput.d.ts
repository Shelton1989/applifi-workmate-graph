import { BookingOrderCreateOrConnectWithoutItemsInput } from "../inputs/BookingOrderCreateOrConnectWithoutItemsInput";
import { BookingOrderCreateWithoutItemsInput } from "../inputs/BookingOrderCreateWithoutItemsInput";
import { BookingOrderWhereUniqueInput } from "../inputs/BookingOrderWhereUniqueInput";
export declare class BookingOrderCreateNestedOneWithoutItemsInput {
    create?: BookingOrderCreateWithoutItemsInput | undefined;
    connectOrCreate?: BookingOrderCreateOrConnectWithoutItemsInput | undefined;
    connect?: BookingOrderWhereUniqueInput | undefined;
}
