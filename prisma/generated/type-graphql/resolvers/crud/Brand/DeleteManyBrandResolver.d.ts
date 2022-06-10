import { GraphQLResolveInfo } from "graphql";
import { DeleteManyBrandArgs } from "./args/DeleteManyBrandArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyBrandResolver {
    deleteManyBrand(ctx: any, info: GraphQLResolveInfo, args: DeleteManyBrandArgs): Promise<AffectedRowsOutput>;
}
