import { GraphQLResolveInfo } from "graphql";
import { CreateManyBrandProductArgs } from "./args/CreateManyBrandProductArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyBrandProductResolver {
    createManyBrandProduct(ctx: any, info: GraphQLResolveInfo, args: CreateManyBrandProductArgs): Promise<AffectedRowsOutput>;
}
