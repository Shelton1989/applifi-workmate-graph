import { GraphQLResolveInfo } from "graphql";
import { DeleteRequestArgs } from "./args/DeleteRequestArgs";
import { Request } from "../../../models/Request";
export declare class DeleteRequestResolver {
    deleteRequest(ctx: any, info: GraphQLResolveInfo, args: DeleteRequestArgs): Promise<Request | null>;
}
