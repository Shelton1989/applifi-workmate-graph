import { GraphQLResolveInfo } from "graphql";
import { GroupByNotificationSettingsArgs } from "./args/GroupByNotificationSettingsArgs";
import { NotificationSettingsGroupBy } from "../../outputs/NotificationSettingsGroupBy";
export declare class GroupByNotificationSettingsResolver {
    groupByNotificationSettings(ctx: any, info: GraphQLResolveInfo, args: GroupByNotificationSettingsArgs): Promise<NotificationSettingsGroupBy[]>;
}
