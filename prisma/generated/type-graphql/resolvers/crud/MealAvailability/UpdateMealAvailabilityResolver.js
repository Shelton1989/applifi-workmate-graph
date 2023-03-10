"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMealAvailabilityResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateMealAvailabilityArgs_1 = require("./args/UpdateMealAvailabilityArgs");
const MealAvailability_1 = require("../../../models/MealAvailability");
const helpers_1 = require("../../../helpers");
let UpdateMealAvailabilityResolver = class UpdateMealAvailabilityResolver {
    async updateMealAvailability(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealAvailability.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => MealAvailability_1.MealAvailability, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateMealAvailabilityArgs_1.UpdateMealAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateMealAvailabilityResolver.prototype, "updateMealAvailability", null);
UpdateMealAvailabilityResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => MealAvailability_1.MealAvailability)
], UpdateMealAvailabilityResolver);
exports.UpdateMealAvailabilityResolver = UpdateMealAvailabilityResolver;
