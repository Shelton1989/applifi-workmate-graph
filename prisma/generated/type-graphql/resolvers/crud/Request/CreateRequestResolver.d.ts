import { GraphQLResolveInfo } from "graphql";
import { CreateRequestArgs } from "./args/CreateRequestArgs";
import { Request } from "../../../models/Request";
export declare class CreateRequestResolver {
    createRequest(ctx: any, info: GraphQLResolveInfo, args: CreateRequestArgs): Promise<Request>;
}
