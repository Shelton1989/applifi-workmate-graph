import { GraphQLResolveInfo } from "graphql";
import { GroupByColorArgs } from "./args/GroupByColorArgs";
import { ColorGroupBy } from "../../outputs/ColorGroupBy";
export declare class GroupByColorResolver {
    groupByColor(ctx: any, info: GraphQLResolveInfo, args: GroupByColorArgs): Promise<ColorGroupBy[]>;
}
