"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertMealItemResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertMealItemArgs_1 = require("./args/UpsertMealItemArgs");
const MealItem_1 = require("../../../models/MealItem");
const helpers_1 = require("../../../helpers");
let UpsertMealItemResolver = class UpsertMealItemResolver {
    async upsertMealItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItem.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => MealItem_1.MealItem, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertMealItemArgs_1.UpsertMealItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertMealItemResolver.prototype, "upsertMealItem", null);
UpsertMealItemResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => MealItem_1.MealItem)
], UpsertMealItemResolver);
exports.UpsertMealItemResolver = UpsertMealItemResolver;
