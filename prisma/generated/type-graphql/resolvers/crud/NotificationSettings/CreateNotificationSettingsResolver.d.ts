import { GraphQLResolveInfo } from "graphql";
import { CreateNotificationSettingsArgs } from "./args/CreateNotificationSettingsArgs";
import { NotificationSettings } from "../../../models/NotificationSettings";
export declare class CreateNotificationSettingsResolver {
    createNotificationSettings(ctx: any, info: GraphQLResolveInfo, args: CreateNotificationSettingsArgs): Promise<NotificationSettings>;
}
