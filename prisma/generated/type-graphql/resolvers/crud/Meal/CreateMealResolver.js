"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMealResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateMealArgs_1 = require("./args/CreateMealArgs");
const Meal_1 = require("../../../models/Meal");
const helpers_1 = require("../../../helpers");
let CreateMealResolver = class CreateMealResolver {
    async createMeal(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meal.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Meal_1.Meal, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateMealArgs_1.CreateMealArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateMealResolver.prototype, "createMeal", null);
CreateMealResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Meal_1.Meal)
], CreateMealResolver);
exports.CreateMealResolver = CreateMealResolver;
