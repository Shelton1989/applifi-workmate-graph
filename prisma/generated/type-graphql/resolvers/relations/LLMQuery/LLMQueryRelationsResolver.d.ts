import { LLMQuery } from "../../../models/LLMQuery";
import { Tenant } from "../../../models/Tenant";
import { User } from "../../../models/User";
export declare class LLMQueryRelationsResolver {
    Tenant(lLMQuery: LLMQuery, ctx: any): Promise<Tenant>;
    User(lLMQuery: LLMQuery, ctx: any): Promise<User | null>;
}
