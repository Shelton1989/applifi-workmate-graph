import { GraphQLResolveInfo } from "graphql";
import { UpdateRequestArgs } from "./args/UpdateRequestArgs";
import { Request } from "../../../models/Request";
export declare class UpdateRequestResolver {
    updateRequest(ctx: any, info: GraphQLResolveInfo, args: UpdateRequestArgs): Promise<Request | null>;
}
