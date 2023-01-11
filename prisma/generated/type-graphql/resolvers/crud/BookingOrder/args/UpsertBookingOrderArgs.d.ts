import { BookingOrderCreateInput } from "../../../inputs/BookingOrderCreateInput";
import { BookingOrderUpdateInput } from "../../../inputs/BookingOrderUpdateInput";
import { BookingOrderWhereUniqueInput } from "../../../inputs/BookingOrderWhereUniqueInput";
export declare class UpsertBookingOrderArgs {
    where: BookingOrderWhereUniqueInput;
    create: BookingOrderCreateInput;
    update: BookingOrderUpdateInput;
}
