import { GraphQLResolveInfo } from "graphql";
import { FindFirstCurrencyArgs } from "./args/FindFirstCurrencyArgs";
import { Currency } from "../../../models/Currency";
export declare class FindFirstCurrencyResolver {
    findFirstCurrency(ctx: any, info: GraphQLResolveInfo, args: FindFirstCurrencyArgs): Promise<Currency | null>;
}
