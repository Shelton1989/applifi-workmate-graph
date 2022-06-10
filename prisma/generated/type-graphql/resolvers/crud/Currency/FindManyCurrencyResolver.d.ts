import { GraphQLResolveInfo } from "graphql";
import { FindManyCurrencyArgs } from "./args/FindManyCurrencyArgs";
import { Currency } from "../../../models/Currency";
export declare class FindManyCurrencyResolver {
    currencies(ctx: any, info: GraphQLResolveInfo, args: FindManyCurrencyArgs): Promise<Currency[]>;
}
