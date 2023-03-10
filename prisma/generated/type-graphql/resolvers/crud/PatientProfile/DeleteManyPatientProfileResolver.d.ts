import { GraphQLResolveInfo } from "graphql";
import { DeleteManyPatientProfileArgs } from "./args/DeleteManyPatientProfileArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyPatientProfileResolver {
    deleteManyPatientProfile(ctx: any, info: GraphQLResolveInfo, args: DeleteManyPatientProfileArgs): Promise<AffectedRowsOutput>;
}
