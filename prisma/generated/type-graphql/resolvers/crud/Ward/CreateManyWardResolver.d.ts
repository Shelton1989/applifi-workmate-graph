import { GraphQLResolveInfo } from "graphql";
import { CreateManyWardArgs } from "./args/CreateManyWardArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyWardResolver {
    createManyWard(ctx: any, info: GraphQLResolveInfo, args: CreateManyWardArgs): Promise<AffectedRowsOutput>;
}
