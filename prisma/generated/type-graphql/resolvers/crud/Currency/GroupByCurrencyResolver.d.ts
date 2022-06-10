import { GraphQLResolveInfo } from "graphql";
import { GroupByCurrencyArgs } from "./args/GroupByCurrencyArgs";
import { CurrencyGroupBy } from "../../outputs/CurrencyGroupBy";
export declare class GroupByCurrencyResolver {
    groupByCurrency(ctx: any, info: GraphQLResolveInfo, args: GroupByCurrencyArgs): Promise<CurrencyGroupBy[]>;
}
