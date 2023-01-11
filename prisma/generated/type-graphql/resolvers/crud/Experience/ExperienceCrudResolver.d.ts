import { GraphQLResolveInfo } from "graphql";
import { AggregateExperienceArgs } from "./args/AggregateExperienceArgs";
import { CreateExperienceArgs } from "./args/CreateExperienceArgs";
import { CreateManyExperienceArgs } from "./args/CreateManyExperienceArgs";
import { DeleteExperienceArgs } from "./args/DeleteExperienceArgs";
import { DeleteManyExperienceArgs } from "./args/DeleteManyExperienceArgs";
import { FindFirstExperienceArgs } from "./args/FindFirstExperienceArgs";
import { FindManyExperienceArgs } from "./args/FindManyExperienceArgs";
import { FindUniqueExperienceArgs } from "./args/FindUniqueExperienceArgs";
import { GroupByExperienceArgs } from "./args/GroupByExperienceArgs";
import { UpdateExperienceArgs } from "./args/UpdateExperienceArgs";
import { UpdateManyExperienceArgs } from "./args/UpdateManyExperienceArgs";
import { UpsertExperienceArgs } from "./args/UpsertExperienceArgs";
import { Experience } from "../../../models/Experience";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateExperience } from "../../outputs/AggregateExperience";
import { ExperienceGroupBy } from "../../outputs/ExperienceGroupBy";
export declare class ExperienceCrudResolver {
    experience(ctx: any, info: GraphQLResolveInfo, args: FindUniqueExperienceArgs): Promise<Experience | null>;
    findFirstExperience(ctx: any, info: GraphQLResolveInfo, args: FindFirstExperienceArgs): Promise<Experience | null>;
    experiences(ctx: any, info: GraphQLResolveInfo, args: FindManyExperienceArgs): Promise<Experience[]>;
    createExperience(ctx: any, info: GraphQLResolveInfo, args: CreateExperienceArgs): Promise<Experience>;
    createManyExperience(ctx: any, info: GraphQLResolveInfo, args: CreateManyExperienceArgs): Promise<AffectedRowsOutput>;
    deleteExperience(ctx: any, info: GraphQLResolveInfo, args: DeleteExperienceArgs): Promise<Experience | null>;
    updateExperience(ctx: any, info: GraphQLResolveInfo, args: UpdateExperienceArgs): Promise<Experience | null>;
    deleteManyExperience(ctx: any, info: GraphQLResolveInfo, args: DeleteManyExperienceArgs): Promise<AffectedRowsOutput>;
    updateManyExperience(ctx: any, info: GraphQLResolveInfo, args: UpdateManyExperienceArgs): Promise<AffectedRowsOutput>;
    upsertExperience(ctx: any, info: GraphQLResolveInfo, args: UpsertExperienceArgs): Promise<Experience>;
    aggregateExperience(ctx: any, info: GraphQLResolveInfo, args: AggregateExperienceArgs): Promise<AggregateExperience>;
    groupByExperience(ctx: any, info: GraphQLResolveInfo, args: GroupByExperienceArgs): Promise<ExperienceGroupBy[]>;
}
