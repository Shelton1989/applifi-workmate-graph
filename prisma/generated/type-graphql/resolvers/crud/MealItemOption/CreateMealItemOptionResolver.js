"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMealItemOptionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateMealItemOptionArgs_1 = require("./args/CreateMealItemOptionArgs");
const MealItemOption_1 = require("../../../models/MealItemOption");
const helpers_1 = require("../../../helpers");
let CreateMealItemOptionResolver = class CreateMealItemOptionResolver {
    async createMealItemOption(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItemOption.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => MealItemOption_1.MealItemOption, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateMealItemOptionArgs_1.CreateMealItemOptionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateMealItemOptionResolver.prototype, "createMealItemOption", null);
CreateMealItemOptionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => MealItemOption_1.MealItemOption)
], CreateMealItemOptionResolver);
exports.CreateMealItemOptionResolver = CreateMealItemOptionResolver;
