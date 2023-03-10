"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByMealAvailabilityResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByMealAvailabilityArgs_1 = require("./args/GroupByMealAvailabilityArgs");
const MealAvailability_1 = require("../../../models/MealAvailability");
const MealAvailabilityGroupBy_1 = require("../../outputs/MealAvailabilityGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByMealAvailabilityResolver = class GroupByMealAvailabilityResolver {
    async groupByMealAvailability(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealAvailability.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [MealAvailabilityGroupBy_1.MealAvailabilityGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByMealAvailabilityArgs_1.GroupByMealAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByMealAvailabilityResolver.prototype, "groupByMealAvailability", null);
GroupByMealAvailabilityResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => MealAvailability_1.MealAvailability)
], GroupByMealAvailabilityResolver);
exports.GroupByMealAvailabilityResolver = GroupByMealAvailabilityResolver;
