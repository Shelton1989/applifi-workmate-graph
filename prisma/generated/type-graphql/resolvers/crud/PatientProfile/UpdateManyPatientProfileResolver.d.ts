import { GraphQLResolveInfo } from "graphql";
import { UpdateManyPatientProfileArgs } from "./args/UpdateManyPatientProfileArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyPatientProfileResolver {
    updateManyPatientProfile(ctx: any, info: GraphQLResolveInfo, args: UpdateManyPatientProfileArgs): Promise<AffectedRowsOutput>;
}
