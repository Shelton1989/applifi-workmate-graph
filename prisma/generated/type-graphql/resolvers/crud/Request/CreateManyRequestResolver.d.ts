import { GraphQLResolveInfo } from "graphql";
import { CreateManyRequestArgs } from "./args/CreateManyRequestArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyRequestResolver {
    createManyRequest(ctx: any, info: GraphQLResolveInfo, args: CreateManyRequestArgs): Promise<AffectedRowsOutput>;
}
