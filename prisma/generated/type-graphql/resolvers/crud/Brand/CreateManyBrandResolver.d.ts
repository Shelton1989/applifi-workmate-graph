import { GraphQLResolveInfo } from "graphql";
import { CreateManyBrandArgs } from "./args/CreateManyBrandArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyBrandResolver {
    createManyBrand(ctx: any, info: GraphQLResolveInfo, args: CreateManyBrandArgs): Promise<AffectedRowsOutput>;
}
