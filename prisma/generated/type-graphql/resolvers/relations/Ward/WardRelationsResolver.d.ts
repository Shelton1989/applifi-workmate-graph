import { User } from "../../../models/User";
import { Ward } from "../../../models/Ward";
import { WardUsersArgs } from "./args/WardUsersArgs";
export declare class WardRelationsResolver {
    Users(ward: Ward, ctx: any, args: WardUsersArgs): Promise<User[]>;
}
