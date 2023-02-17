import { TransactionOrderByWithRelationInput } from "../../../inputs/TransactionOrderByWithRelationInput";
import { TransactionWhereInput } from "../../../inputs/TransactionWhereInput";
import { TransactionWhereUniqueInput } from "../../../inputs/TransactionWhereUniqueInput";
export declare class BookingOrderTransactionsArgs {
    where?: TransactionWhereInput | undefined;
    orderBy?: TransactionOrderByWithRelationInput[] | undefined;
    cursor?: TransactionWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "bookingOrderId" | "amountInLowestDenomination" | "currencyId" | "SelectedPaymentType" | "stripePaymentReference" | "paymentMethod" | "paymentType" | "createdAt" | "updatedAt"> | undefined;
}
