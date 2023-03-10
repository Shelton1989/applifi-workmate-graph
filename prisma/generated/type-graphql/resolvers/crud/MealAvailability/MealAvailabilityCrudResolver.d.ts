import { GraphQLResolveInfo } from "graphql";
import { AggregateMealAvailabilityArgs } from "./args/AggregateMealAvailabilityArgs";
import { CreateManyMealAvailabilityArgs } from "./args/CreateManyMealAvailabilityArgs";
import { CreateMealAvailabilityArgs } from "./args/CreateMealAvailabilityArgs";
import { DeleteManyMealAvailabilityArgs } from "./args/DeleteManyMealAvailabilityArgs";
import { DeleteMealAvailabilityArgs } from "./args/DeleteMealAvailabilityArgs";
import { FindFirstMealAvailabilityArgs } from "./args/FindFirstMealAvailabilityArgs";
import { FindManyMealAvailabilityArgs } from "./args/FindManyMealAvailabilityArgs";
import { FindUniqueMealAvailabilityArgs } from "./args/FindUniqueMealAvailabilityArgs";
import { GroupByMealAvailabilityArgs } from "./args/GroupByMealAvailabilityArgs";
import { UpdateManyMealAvailabilityArgs } from "./args/UpdateManyMealAvailabilityArgs";
import { UpdateMealAvailabilityArgs } from "./args/UpdateMealAvailabilityArgs";
import { UpsertMealAvailabilityArgs } from "./args/UpsertMealAvailabilityArgs";
import { MealAvailability } from "../../../models/MealAvailability";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMealAvailability } from "../../outputs/AggregateMealAvailability";
import { MealAvailabilityGroupBy } from "../../outputs/MealAvailabilityGroupBy";
export declare class MealAvailabilityCrudResolver {
    mealAvailability(ctx: any, info: GraphQLResolveInfo, args: FindUniqueMealAvailabilityArgs): Promise<MealAvailability | null>;
    findFirstMealAvailability(ctx: any, info: GraphQLResolveInfo, args: FindFirstMealAvailabilityArgs): Promise<MealAvailability | null>;
    mealAvailabilities(ctx: any, info: GraphQLResolveInfo, args: FindManyMealAvailabilityArgs): Promise<MealAvailability[]>;
    createMealAvailability(ctx: any, info: GraphQLResolveInfo, args: CreateMealAvailabilityArgs): Promise<MealAvailability>;
    createManyMealAvailability(ctx: any, info: GraphQLResolveInfo, args: CreateManyMealAvailabilityArgs): Promise<AffectedRowsOutput>;
    deleteMealAvailability(ctx: any, info: GraphQLResolveInfo, args: DeleteMealAvailabilityArgs): Promise<MealAvailability | null>;
    updateMealAvailability(ctx: any, info: GraphQLResolveInfo, args: UpdateMealAvailabilityArgs): Promise<MealAvailability | null>;
    deleteManyMealAvailability(ctx: any, info: GraphQLResolveInfo, args: DeleteManyMealAvailabilityArgs): Promise<AffectedRowsOutput>;
    updateManyMealAvailability(ctx: any, info: GraphQLResolveInfo, args: UpdateManyMealAvailabilityArgs): Promise<AffectedRowsOutput>;
    upsertMealAvailability(ctx: any, info: GraphQLResolveInfo, args: UpsertMealAvailabilityArgs): Promise<MealAvailability>;
    aggregateMealAvailability(ctx: any, info: GraphQLResolveInfo, args: AggregateMealAvailabilityArgs): Promise<AggregateMealAvailability>;
    groupByMealAvailability(ctx: any, info: GraphQLResolveInfo, args: GroupByMealAvailabilityArgs): Promise<MealAvailabilityGroupBy[]>;
}
