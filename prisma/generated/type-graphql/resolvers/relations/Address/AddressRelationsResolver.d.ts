import { Address } from "../../../models/Address";
import { Order } from "../../../models/Order";
import { User } from "../../../models/User";
import { AddressOrdersArgs } from "./args/AddressOrdersArgs";
export declare class AddressRelationsResolver {
    User(address: Address, ctx: any): Promise<User | null>;
    Orders(address: Address, ctx: any, args: AddressOrdersArgs): Promise<Order[]>;
}
