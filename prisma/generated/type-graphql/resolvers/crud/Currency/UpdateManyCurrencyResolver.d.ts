import { GraphQLResolveInfo } from "graphql";
import { UpdateManyCurrencyArgs } from "./args/UpdateManyCurrencyArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCurrencyResolver {
    updateManyCurrency(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCurrencyArgs): Promise<AffectedRowsOutput>;
}
