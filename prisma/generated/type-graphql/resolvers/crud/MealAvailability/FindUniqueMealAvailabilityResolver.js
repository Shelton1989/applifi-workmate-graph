"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueMealAvailabilityResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueMealAvailabilityArgs_1 = require("./args/FindUniqueMealAvailabilityArgs");
const MealAvailability_1 = require("../../../models/MealAvailability");
const helpers_1 = require("../../../helpers");
let FindUniqueMealAvailabilityResolver = class FindUniqueMealAvailabilityResolver {
    async mealAvailability(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealAvailability.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => MealAvailability_1.MealAvailability, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueMealAvailabilityArgs_1.FindUniqueMealAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueMealAvailabilityResolver.prototype, "mealAvailability", null);
FindUniqueMealAvailabilityResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => MealAvailability_1.MealAvailability)
], FindUniqueMealAvailabilityResolver);
exports.FindUniqueMealAvailabilityResolver = FindUniqueMealAvailabilityResolver;
