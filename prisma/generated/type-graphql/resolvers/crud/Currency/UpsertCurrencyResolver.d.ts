import { GraphQLResolveInfo } from "graphql";
import { UpsertCurrencyArgs } from "./args/UpsertCurrencyArgs";
import { Currency } from "../../../models/Currency";
export declare class UpsertCurrencyResolver {
    upsertCurrency(ctx: any, info: GraphQLResolveInfo, args: UpsertCurrencyArgs): Promise<Currency>;
}
