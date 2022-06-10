import { GraphQLResolveInfo } from "graphql";
import { UpdateManyBrandArgs } from "./args/UpdateManyBrandArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyBrandResolver {
    updateManyBrand(ctx: any, info: GraphQLResolveInfo, args: UpdateManyBrandArgs): Promise<AffectedRowsOutput>;
}
