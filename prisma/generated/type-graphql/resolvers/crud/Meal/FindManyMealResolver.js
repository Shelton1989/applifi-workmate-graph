"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyMealResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyMealArgs_1 = require("./args/FindManyMealArgs");
const Meal_1 = require("../../../models/Meal");
const helpers_1 = require("../../../helpers");
let FindManyMealResolver = class FindManyMealResolver {
    async meals(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meal.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Meal_1.Meal], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyMealArgs_1.FindManyMealArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyMealResolver.prototype, "meals", null);
FindManyMealResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Meal_1.Meal)
], FindManyMealResolver);
exports.FindManyMealResolver = FindManyMealResolver;
