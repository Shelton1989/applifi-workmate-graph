"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueMealResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueMealArgs_1 = require("./args/FindUniqueMealArgs");
const Meal_1 = require("../../../models/Meal");
const helpers_1 = require("../../../helpers");
let FindUniqueMealResolver = class FindUniqueMealResolver {
    async meal(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meal.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Meal_1.Meal, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueMealArgs_1.FindUniqueMealArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueMealResolver.prototype, "meal", null);
FindUniqueMealResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Meal_1.Meal)
], FindUniqueMealResolver);
exports.FindUniqueMealResolver = FindUniqueMealResolver;
