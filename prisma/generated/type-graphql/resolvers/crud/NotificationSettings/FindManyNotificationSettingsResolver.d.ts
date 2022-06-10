import { GraphQLResolveInfo } from "graphql";
import { FindManyNotificationSettingsArgs } from "./args/FindManyNotificationSettingsArgs";
import { NotificationSettings } from "../../../models/NotificationSettings";
export declare class FindManyNotificationSettingsResolver {
    findManyNotificationSettings(ctx: any, info: GraphQLResolveInfo, args: FindManyNotificationSettingsArgs): Promise<NotificationSettings[]>;
}
