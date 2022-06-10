import { GraphQLResolveInfo } from "graphql";
import { UpdateCurrencyArgs } from "./args/UpdateCurrencyArgs";
import { Currency } from "../../../models/Currency";
export declare class UpdateCurrencyResolver {
    updateCurrency(ctx: any, info: GraphQLResolveInfo, args: UpdateCurrencyArgs): Promise<Currency | null>;
}
