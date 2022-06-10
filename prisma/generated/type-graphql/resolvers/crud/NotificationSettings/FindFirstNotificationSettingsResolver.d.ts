import { GraphQLResolveInfo } from "graphql";
import { FindFirstNotificationSettingsArgs } from "./args/FindFirstNotificationSettingsArgs";
import { NotificationSettings } from "../../../models/NotificationSettings";
export declare class FindFirstNotificationSettingsResolver {
    findFirstNotificationSettings(ctx: any, info: GraphQLResolveInfo, args: FindFirstNotificationSettingsArgs): Promise<NotificationSettings | null>;
}
