import { Notification } from "../../../models/Notification";
import { User } from "../../../models/User";
export declare class NotificationRelationsResolver {
    User(notification: Notification, ctx: any): Promise<User | null>;
    Actor(notification: Notification, ctx: any): Promise<User | null>;
}
