import { GraphQLResolveInfo } from "graphql";
import { UpsertRequestArgs } from "./args/UpsertRequestArgs";
import { Request } from "../../../models/Request";
export declare class UpsertRequestResolver {
    upsertRequest(ctx: any, info: GraphQLResolveInfo, args: UpsertRequestArgs): Promise<Request>;
}
