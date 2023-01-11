import { GraphQLResolveInfo } from "graphql";
import { DeleteCurrencyArgs } from "./args/DeleteCurrencyArgs";
import { Currency } from "../../../models/Currency";
export declare class DeleteCurrencyResolver {
    deleteCurrency(ctx: any, info: GraphQLResolveInfo, args: DeleteCurrencyArgs): Promise<Currency | null>;
}
