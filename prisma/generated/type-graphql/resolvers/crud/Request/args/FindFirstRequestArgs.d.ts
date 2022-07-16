import { RequestOrderByWithRelationInput } from "../../../inputs/RequestOrderByWithRelationInput";
import { RequestWhereInput } from "../../../inputs/RequestWhereInput";
import { RequestWhereUniqueInput } from "../../../inputs/RequestWhereUniqueInput";
export declare class FindFirstRequestArgs {
    where?: RequestWhereInput | undefined;
    orderBy?: RequestOrderByWithRelationInput[] | undefined;
    cursor?: RequestWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "reporterName" | "reporterEmail" | "subject" | "message" | "type" | "socialLinks" | "entityId" | "requestResolution" | "userId" | "createdAt" | "updatedAt"> | undefined;
}
