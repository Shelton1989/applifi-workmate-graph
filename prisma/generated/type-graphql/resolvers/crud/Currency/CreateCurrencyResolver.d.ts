import { GraphQLResolveInfo } from "graphql";
import { CreateCurrencyArgs } from "./args/CreateCurrencyArgs";
import { Currency } from "../../../models/Currency";
export declare class CreateCurrencyResolver {
    createCurrency(ctx: any, info: GraphQLResolveInfo, args: CreateCurrencyArgs): Promise<Currency>;
}
