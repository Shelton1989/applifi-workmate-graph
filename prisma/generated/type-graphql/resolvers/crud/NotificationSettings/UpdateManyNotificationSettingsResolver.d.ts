import { GraphQLResolveInfo } from "graphql";
import { UpdateManyNotificationSettingsArgs } from "./args/UpdateManyNotificationSettingsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyNotificationSettingsResolver {
    updateManyNotificationSettings(ctx: any, info: GraphQLResolveInfo, args: UpdateManyNotificationSettingsArgs): Promise<AffectedRowsOutput>;
}
