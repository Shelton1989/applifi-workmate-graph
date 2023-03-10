"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMealResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteMealArgs_1 = require("./args/DeleteMealArgs");
const Meal_1 = require("../../../models/Meal");
const helpers_1 = require("../../../helpers");
let DeleteMealResolver = class DeleteMealResolver {
    async deleteMeal(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meal.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Meal_1.Meal, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteMealArgs_1.DeleteMealArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteMealResolver.prototype, "deleteMeal", null);
DeleteMealResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Meal_1.Meal)
], DeleteMealResolver);
exports.DeleteMealResolver = DeleteMealResolver;
