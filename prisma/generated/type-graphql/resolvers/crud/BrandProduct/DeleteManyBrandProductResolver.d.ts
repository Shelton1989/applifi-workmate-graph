import { GraphQLResolveInfo } from "graphql";
import { DeleteManyBrandProductArgs } from "./args/DeleteManyBrandProductArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyBrandProductResolver {
    deleteManyBrandProduct(ctx: any, info: GraphQLResolveInfo, args: DeleteManyBrandProductArgs): Promise<AffectedRowsOutput>;
}
