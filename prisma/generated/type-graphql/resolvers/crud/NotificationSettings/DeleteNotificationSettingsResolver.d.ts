import { GraphQLResolveInfo } from "graphql";
import { DeleteNotificationSettingsArgs } from "./args/DeleteNotificationSettingsArgs";
import { NotificationSettings } from "../../../models/NotificationSettings";
export declare class DeleteNotificationSettingsResolver {
    deleteNotificationSettings(ctx: any, info: GraphQLResolveInfo, args: DeleteNotificationSettingsArgs): Promise<NotificationSettings | null>;
}
