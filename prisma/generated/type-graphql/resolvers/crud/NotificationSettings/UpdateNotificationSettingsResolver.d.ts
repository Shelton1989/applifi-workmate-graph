import { GraphQLResolveInfo } from "graphql";
import { UpdateNotificationSettingsArgs } from "./args/UpdateNotificationSettingsArgs";
import { NotificationSettings } from "../../../models/NotificationSettings";
export declare class UpdateNotificationSettingsResolver {
    updateNotificationSettings(ctx: any, info: GraphQLResolveInfo, args: UpdateNotificationSettingsArgs): Promise<NotificationSettings | null>;
}
