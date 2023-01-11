import { GraphQLResolveInfo } from "graphql";
import { DeleteManyPriceArgs } from "./args/DeleteManyPriceArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyPriceResolver {
    deleteManyPrice(ctx: any, info: GraphQLResolveInfo, args: DeleteManyPriceArgs): Promise<AffectedRowsOutput>;
}
