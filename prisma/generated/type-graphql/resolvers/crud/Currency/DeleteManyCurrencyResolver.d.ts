import { GraphQLResolveInfo } from "graphql";
import { DeleteManyCurrencyArgs } from "./args/DeleteManyCurrencyArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCurrencyResolver {
    deleteManyCurrency(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCurrencyArgs): Promise<AffectedRowsOutput>;
}
