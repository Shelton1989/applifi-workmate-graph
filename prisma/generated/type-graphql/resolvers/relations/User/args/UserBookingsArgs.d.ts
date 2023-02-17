import { BookingOrderOrderByWithRelationInput } from "../../../inputs/BookingOrderOrderByWithRelationInput";
import { BookingOrderWhereInput } from "../../../inputs/BookingOrderWhereInput";
import { BookingOrderWhereUniqueInput } from "../../../inputs/BookingOrderWhereUniqueInput";
export declare class UserBookingsArgs {
    where?: BookingOrderWhereInput | undefined;
    orderBy?: BookingOrderOrderByWithRelationInput[] | undefined;
    cursor?: BookingOrderWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "experienceId" | "status" | "buyerId" | "tenantId" | "PaymentStatus" | "createdAt" | "updatedAt"> | undefined;
}
