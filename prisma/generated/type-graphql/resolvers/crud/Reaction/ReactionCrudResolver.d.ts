import { GraphQLResolveInfo } from "graphql";
import { AggregateReactionArgs } from "./args/AggregateReactionArgs";
import { CreateManyReactionArgs } from "./args/CreateManyReactionArgs";
import { CreateReactionArgs } from "./args/CreateReactionArgs";
import { DeleteManyReactionArgs } from "./args/DeleteManyReactionArgs";
import { DeleteReactionArgs } from "./args/DeleteReactionArgs";
import { FindFirstReactionArgs } from "./args/FindFirstReactionArgs";
import { FindManyReactionArgs } from "./args/FindManyReactionArgs";
import { FindUniqueReactionArgs } from "./args/FindUniqueReactionArgs";
import { GroupByReactionArgs } from "./args/GroupByReactionArgs";
import { UpdateManyReactionArgs } from "./args/UpdateManyReactionArgs";
import { UpdateReactionArgs } from "./args/UpdateReactionArgs";
import { UpsertReactionArgs } from "./args/UpsertReactionArgs";
import { Reaction } from "../../../models/Reaction";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateReaction } from "../../outputs/AggregateReaction";
import { ReactionGroupBy } from "../../outputs/ReactionGroupBy";
export declare class ReactionCrudResolver {
    reaction(ctx: any, info: GraphQLResolveInfo, args: FindUniqueReactionArgs): Promise<Reaction | null>;
    findFirstReaction(ctx: any, info: GraphQLResolveInfo, args: FindFirstReactionArgs): Promise<Reaction | null>;
    reactions(ctx: any, info: GraphQLResolveInfo, args: FindManyReactionArgs): Promise<Reaction[]>;
    createReaction(ctx: any, info: GraphQLResolveInfo, args: CreateReactionArgs): Promise<Reaction>;
    createManyReaction(ctx: any, info: GraphQLResolveInfo, args: CreateManyReactionArgs): Promise<AffectedRowsOutput>;
    deleteReaction(ctx: any, info: GraphQLResolveInfo, args: DeleteReactionArgs): Promise<Reaction | null>;
    updateReaction(ctx: any, info: GraphQLResolveInfo, args: UpdateReactionArgs): Promise<Reaction | null>;
    deleteManyReaction(ctx: any, info: GraphQLResolveInfo, args: DeleteManyReactionArgs): Promise<AffectedRowsOutput>;
    updateManyReaction(ctx: any, info: GraphQLResolveInfo, args: UpdateManyReactionArgs): Promise<AffectedRowsOutput>;
    upsertReaction(ctx: any, info: GraphQLResolveInfo, args: UpsertReactionArgs): Promise<Reaction>;
    aggregateReaction(ctx: any, info: GraphQLResolveInfo, args: AggregateReactionArgs): Promise<AggregateReaction>;
    groupByReaction(ctx: any, info: GraphQLResolveInfo, args: GroupByReactionArgs): Promise<ReactionGroupBy[]>;
}