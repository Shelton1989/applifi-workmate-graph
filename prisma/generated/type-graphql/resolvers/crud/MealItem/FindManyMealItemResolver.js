"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyMealItemResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyMealItemArgs_1 = require("./args/FindManyMealItemArgs");
const MealItem_1 = require("../../../models/MealItem");
const helpers_1 = require("../../../helpers");
let FindManyMealItemResolver = class FindManyMealItemResolver {
    async mealItems(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItem.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [MealItem_1.MealItem], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyMealItemArgs_1.FindManyMealItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyMealItemResolver.prototype, "mealItems", null);
FindManyMealItemResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => MealItem_1.MealItem)
], FindManyMealItemResolver);
exports.FindManyMealItemResolver = FindManyMealItemResolver;
