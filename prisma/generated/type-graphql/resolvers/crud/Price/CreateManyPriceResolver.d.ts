import { GraphQLResolveInfo } from "graphql";
import { CreateManyPriceArgs } from "./args/CreateManyPriceArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyPriceResolver {
    createManyPrice(ctx: any, info: GraphQLResolveInfo, args: CreateManyPriceArgs): Promise<AffectedRowsOutput>;
}
