"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMealItemResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateMealItemArgs_1 = require("./args/UpdateMealItemArgs");
const MealItem_1 = require("../../../models/MealItem");
const helpers_1 = require("../../../helpers");
let UpdateMealItemResolver = class UpdateMealItemResolver {
    async updateMealItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItem.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => MealItem_1.MealItem, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateMealItemArgs_1.UpdateMealItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateMealItemResolver.prototype, "updateMealItem", null);
UpdateMealItemResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => MealItem_1.MealItem)
], UpdateMealItemResolver);
exports.UpdateMealItemResolver = UpdateMealItemResolver;