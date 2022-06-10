import { GraphQLResolveInfo } from "graphql";
import { UpsertNotificationSettingsArgs } from "./args/UpsertNotificationSettingsArgs";
import { NotificationSettings } from "../../../models/NotificationSettings";
export declare class UpsertNotificationSettingsResolver {
    upsertNotificationSettings(ctx: any, info: GraphQLResolveInfo, args: UpsertNotificationSettingsArgs): Promise<NotificationSettings>;
}
