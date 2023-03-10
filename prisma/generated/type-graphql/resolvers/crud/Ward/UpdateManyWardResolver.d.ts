import { GraphQLResolveInfo } from "graphql";
import { UpdateManyWardArgs } from "./args/UpdateManyWardArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyWardResolver {
    updateManyWard(ctx: any, info: GraphQLResolveInfo, args: UpdateManyWardArgs): Promise<AffectedRowsOutput>;
}
