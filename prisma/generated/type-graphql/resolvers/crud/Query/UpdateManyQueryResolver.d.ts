import { GraphQLResolveInfo } from "graphql";
import { UpdateManyQueryArgs } from "./args/UpdateManyQueryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyQueryResolver {
    updateManyQuery(ctx: any, info: GraphQLResolveInfo, args: UpdateManyQueryArgs): Promise<AffectedRowsOutput>;
}
