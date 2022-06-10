import { GraphQLResolveInfo } from "graphql";
import { GroupBySizeArgs } from "./args/GroupBySizeArgs";
import { SizeGroupBy } from "../../outputs/SizeGroupBy";
export declare class GroupBySizeResolver {
    groupBySize(ctx: any, info: GraphQLResolveInfo, args: GroupBySizeArgs): Promise<SizeGroupBy[]>;
}
