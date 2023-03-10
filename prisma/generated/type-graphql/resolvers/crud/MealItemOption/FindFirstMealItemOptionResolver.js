"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstMealItemOptionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstMealItemOptionArgs_1 = require("./args/FindFirstMealItemOptionArgs");
const MealItemOption_1 = require("../../../models/MealItemOption");
const helpers_1 = require("../../../helpers");
let FindFirstMealItemOptionResolver = class FindFirstMealItemOptionResolver {
    async findFirstMealItemOption(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItemOption.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => MealItemOption_1.MealItemOption, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstMealItemOptionArgs_1.FindFirstMealItemOptionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstMealItemOptionResolver.prototype, "findFirstMealItemOption", null);
FindFirstMealItemOptionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => MealItemOption_1.MealItemOption)
], FindFirstMealItemOptionResolver);
exports.FindFirstMealItemOptionResolver = FindFirstMealItemOptionResolver;
