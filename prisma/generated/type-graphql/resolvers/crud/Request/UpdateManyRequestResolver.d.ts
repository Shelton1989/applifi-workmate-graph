import { GraphQLResolveInfo } from "graphql";
import { UpdateManyRequestArgs } from "./args/UpdateManyRequestArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyRequestResolver {
    updateManyRequest(ctx: any, info: GraphQLResolveInfo, args: UpdateManyRequestArgs): Promise<AffectedRowsOutput>;
}
