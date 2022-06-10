import { GraphQLResolveInfo } from "graphql";
import { CreateManyNotificationSettingsArgs } from "./args/CreateManyNotificationSettingsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyNotificationSettingsResolver {
    createManyNotificationSettings(ctx: any, info: GraphQLResolveInfo, args: CreateManyNotificationSettingsArgs): Promise<AffectedRowsOutput>;
}
