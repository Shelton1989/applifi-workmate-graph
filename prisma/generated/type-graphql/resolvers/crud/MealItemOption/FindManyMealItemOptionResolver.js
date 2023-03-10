"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyMealItemOptionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyMealItemOptionArgs_1 = require("./args/FindManyMealItemOptionArgs");
const MealItemOption_1 = require("../../../models/MealItemOption");
const helpers_1 = require("../../../helpers");
let FindManyMealItemOptionResolver = class FindManyMealItemOptionResolver {
    async mealItemOptions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItemOption.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [MealItemOption_1.MealItemOption], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyMealItemOptionArgs_1.FindManyMealItemOptionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyMealItemOptionResolver.prototype, "mealItemOptions", null);
FindManyMealItemOptionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => MealItemOption_1.MealItemOption)
], FindManyMealItemOptionResolver);
exports.FindManyMealItemOptionResolver = FindManyMealItemOptionResolver;
