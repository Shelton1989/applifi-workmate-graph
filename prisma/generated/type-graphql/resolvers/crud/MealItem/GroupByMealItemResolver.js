"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByMealItemResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByMealItemArgs_1 = require("./args/GroupByMealItemArgs");
const MealItem_1 = require("../../../models/MealItem");
const MealItemGroupBy_1 = require("../../outputs/MealItemGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByMealItemResolver = class GroupByMealItemResolver {
    async groupByMealItem(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItem.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [MealItemGroupBy_1.MealItemGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByMealItemArgs_1.GroupByMealItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByMealItemResolver.prototype, "groupByMealItem", null);
GroupByMealItemResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => MealItem_1.MealItem)
], GroupByMealItemResolver);
exports.GroupByMealItemResolver = GroupByMealItemResolver;
