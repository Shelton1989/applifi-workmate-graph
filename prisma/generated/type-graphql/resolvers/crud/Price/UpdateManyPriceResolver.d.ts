import { GraphQLResolveInfo } from "graphql";
import { UpdateManyPriceArgs } from "./args/UpdateManyPriceArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyPriceResolver {
    updateManyPrice(ctx: any, info: GraphQLResolveInfo, args: UpdateManyPriceArgs): Promise<AffectedRowsOutput>;
}
