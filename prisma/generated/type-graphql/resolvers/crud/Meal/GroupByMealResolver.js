"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByMealResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByMealArgs_1 = require("./args/GroupByMealArgs");
const Meal_1 = require("../../../models/Meal");
const MealGroupBy_1 = require("../../outputs/MealGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByMealResolver = class GroupByMealResolver {
    async groupByMeal(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meal.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [MealGroupBy_1.MealGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByMealArgs_1.GroupByMealArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByMealResolver.prototype, "groupByMeal", null);
GroupByMealResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Meal_1.Meal)
], GroupByMealResolver);
exports.GroupByMealResolver = GroupByMealResolver;
