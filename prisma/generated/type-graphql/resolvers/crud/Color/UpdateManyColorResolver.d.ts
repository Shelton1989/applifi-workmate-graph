import { GraphQLResolveInfo } from "graphql";
import { UpdateManyColorArgs } from "./args/UpdateManyColorArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyColorResolver {
    updateManyColor(ctx: any, info: GraphQLResolveInfo, args: UpdateManyColorArgs): Promise<AffectedRowsOutput>;
}
