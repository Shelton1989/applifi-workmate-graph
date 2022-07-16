import { OrderOrderByWithRelationInput } from "../../../inputs/OrderOrderByWithRelationInput";
import { OrderWhereInput } from "../../../inputs/OrderWhereInput";
import { OrderWhereUniqueInput } from "../../../inputs/OrderWhereUniqueInput";
export declare class UserMyOrdersArgs {
    where?: OrderWhereInput | undefined;
    orderBy?: OrderOrderByWithRelationInput[] | undefined;
    cursor?: OrderWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "status" | "selectedShippingAddressId" | "selectedShippingMethodId" | "SelectedPaymentType" | "stripePaymentReference" | "buyerId" | "sellerId" | "createdAt" | "updatedAt"> | undefined;
}