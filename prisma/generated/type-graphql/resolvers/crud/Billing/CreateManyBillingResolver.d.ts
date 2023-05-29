import { GraphQLResolveInfo } from "graphql";
import { CreateManyBillingArgs } from "./args/CreateManyBillingArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyBillingResolver {
    createManyBilling(ctx: any, info: GraphQLResolveInfo, args: CreateManyBillingArgs): Promise<AffectedRowsOutput>;
}
