import { AddressOrderByWithRelationInput } from "../../../inputs/AddressOrderByWithRelationInput";
import { AddressWhereInput } from "../../../inputs/AddressWhereInput";
import { AddressWhereUniqueInput } from "../../../inputs/AddressWhereUniqueInput";
export declare class FindFirstAddressArgs {
    where?: AddressWhereInput | undefined;
    orderBy?: AddressOrderByWithRelationInput[] | undefined;
    cursor?: AddressWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "type" | "line1" | "line2" | "city" | "district" | "country" | "code" | "isDefault" | "userId" | "createdAt" | "updatedAt"> | undefined;
}
