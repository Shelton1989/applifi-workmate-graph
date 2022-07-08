import { RequestOrderByWithRelationInput } from "../../../inputs/RequestOrderByWithRelationInput";
import { RequestWhereInput } from "../../../inputs/RequestWhereInput";
import { RequestWhereUniqueInput } from "../../../inputs/RequestWhereUniqueInput";
export declare class UserRequestsArgs {
    where?: RequestWhereInput | undefined;
    orderBy?: RequestOrderByWithRelationInput[] | undefined;
    cursor?: RequestWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "subject" | "message" | "type" | "socialLinks" | "entityId" | "requestResolution" | "userId" | "createdAt" | "updatedAt"> | undefined;
}
