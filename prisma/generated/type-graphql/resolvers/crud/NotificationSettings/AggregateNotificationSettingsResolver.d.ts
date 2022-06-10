import { GraphQLResolveInfo } from "graphql";
import { AggregateNotificationSettingsArgs } from "./args/AggregateNotificationSettingsArgs";
import { AggregateNotificationSettings } from "../../outputs/AggregateNotificationSettings";
export declare class AggregateNotificationSettingsResolver {
    aggregateNotificationSettings(ctx: any, info: GraphQLResolveInfo, args: AggregateNotificationSettingsArgs): Promise<AggregateNotificationSettings>;
}
