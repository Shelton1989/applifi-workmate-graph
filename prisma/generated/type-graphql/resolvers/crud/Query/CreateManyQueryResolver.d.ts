import { GraphQLResolveInfo } from "graphql";
import { CreateManyQueryArgs } from "./args/CreateManyQueryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyQueryResolver {
    createManyQuery(ctx: any, info: GraphQLResolveInfo, args: CreateManyQueryArgs): Promise<AffectedRowsOutput>;
}
