"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertMealAvailabilityResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertMealAvailabilityArgs_1 = require("./args/UpsertMealAvailabilityArgs");
const MealAvailability_1 = require("../../../models/MealAvailability");
const helpers_1 = require("../../../helpers");
let UpsertMealAvailabilityResolver = class UpsertMealAvailabilityResolver {
    async upsertMealAvailability(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealAvailability.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => MealAvailability_1.MealAvailability, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertMealAvailabilityArgs_1.UpsertMealAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertMealAvailabilityResolver.prototype, "upsertMealAvailability", null);
UpsertMealAvailabilityResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => MealAvailability_1.MealAvailability)
], UpsertMealAvailabilityResolver);
exports.UpsertMealAvailabilityResolver = UpsertMealAvailabilityResolver;
