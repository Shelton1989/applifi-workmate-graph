"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMealItemOptionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteMealItemOptionArgs_1 = require("./args/DeleteMealItemOptionArgs");
const MealItemOption_1 = require("../../../models/MealItemOption");
const helpers_1 = require("../../../helpers");
let DeleteMealItemOptionResolver = class DeleteMealItemOptionResolver {
    async deleteMealItemOption(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItemOption.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => MealItemOption_1.MealItemOption, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteMealItemOptionArgs_1.DeleteMealItemOptionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteMealItemOptionResolver.prototype, "deleteMealItemOption", null);
DeleteMealItemOptionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => MealItemOption_1.MealItemOption)
], DeleteMealItemOptionResolver);
exports.DeleteMealItemOptionResolver = DeleteMealItemOptionResolver;
