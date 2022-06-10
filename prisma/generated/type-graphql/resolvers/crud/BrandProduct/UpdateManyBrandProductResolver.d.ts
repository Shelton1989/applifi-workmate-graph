import { GraphQLResolveInfo } from "graphql";
import { UpdateManyBrandProductArgs } from "./args/UpdateManyBrandProductArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyBrandProductResolver {
    updateManyBrandProduct(ctx: any, info: GraphQLResolveInfo, args: UpdateManyBrandProductArgs): Promise<AffectedRowsOutput>;
}
