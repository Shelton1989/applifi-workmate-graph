import { GraphQLResolveInfo } from "graphql";
import { CreateManyPatientProfileArgs } from "./args/CreateManyPatientProfileArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyPatientProfileResolver {
    createManyPatientProfile(ctx: any, info: GraphQLResolveInfo, args: CreateManyPatientProfileArgs): Promise<AffectedRowsOutput>;
}
