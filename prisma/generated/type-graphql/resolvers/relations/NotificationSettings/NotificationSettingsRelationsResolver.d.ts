import { NotificationSettings } from "../../../models/NotificationSettings";
import { User } from "../../../models/User";
export declare class NotificationSettingsRelationsResolver {
    User(notificationSettings: NotificationSettings, ctx: any): Promise<User | null>;
}
