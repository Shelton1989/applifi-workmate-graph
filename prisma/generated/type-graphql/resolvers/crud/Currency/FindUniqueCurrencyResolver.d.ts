import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCurrencyArgs } from "./args/FindUniqueCurrencyArgs";
import { Currency } from "../../../models/Currency";
export declare class FindUniqueCurrencyResolver {
    currency(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCurrencyArgs): Promise<Currency | null>;
}
