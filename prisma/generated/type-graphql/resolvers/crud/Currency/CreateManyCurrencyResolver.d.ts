import { GraphQLResolveInfo } from "graphql";
import { CreateManyCurrencyArgs } from "./args/CreateManyCurrencyArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCurrencyResolver {
    createManyCurrency(ctx: any, info: GraphQLResolveInfo, args: CreateManyCurrencyArgs): Promise<AffectedRowsOutput>;
}
