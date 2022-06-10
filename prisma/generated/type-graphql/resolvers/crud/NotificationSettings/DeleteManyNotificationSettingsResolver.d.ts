import { GraphQLResolveInfo } from "graphql";
import { DeleteManyNotificationSettingsArgs } from "./args/DeleteManyNotificationSettingsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyNotificationSettingsResolver {
    deleteManyNotificationSettings(ctx: any, info: GraphQLResolveInfo, args: DeleteManyNotificationSettingsArgs): Promise<AffectedRowsOutput>;
}
