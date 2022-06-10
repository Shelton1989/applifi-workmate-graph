import { GraphQLResolveInfo } from "graphql";
import { FindUniqueNotificationSettingsArgs } from "./args/FindUniqueNotificationSettingsArgs";
import { NotificationSettings } from "../../../models/NotificationSettings";
export declare class FindUniqueNotificationSettingsResolver {
    findUniqueNotificationSettings(ctx: any, info: GraphQLResolveInfo, args: FindUniqueNotificationSettingsArgs): Promise<NotificationSettings | null>;
}
