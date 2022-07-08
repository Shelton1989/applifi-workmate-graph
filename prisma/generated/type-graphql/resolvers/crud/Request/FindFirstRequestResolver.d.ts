import { GraphQLResolveInfo } from "graphql";
import { FindFirstRequestArgs } from "./args/FindFirstRequestArgs";
import { Request } from "../../../models/Request";
export declare class FindFirstRequestResolver {
    findFirstRequest(ctx: any, info: GraphQLResolveInfo, args: FindFirstRequestArgs): Promise<Request | null>;
}
