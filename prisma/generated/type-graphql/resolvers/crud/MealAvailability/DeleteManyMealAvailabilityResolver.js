"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyMealAvailabilityResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManyMealAvailabilityArgs_1 = require("./args/DeleteManyMealAvailabilityArgs");
const MealAvailability_1 = require("../../../models/MealAvailability");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyMealAvailabilityResolver = class DeleteManyMealAvailabilityResolver {
    async deleteManyMealAvailability(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealAvailability.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyMealAvailabilityArgs_1.DeleteManyMealAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyMealAvailabilityResolver.prototype, "deleteManyMealAvailability", null);
DeleteManyMealAvailabilityResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => MealAvailability_1.MealAvailability)
], DeleteManyMealAvailabilityResolver);
exports.DeleteManyMealAvailabilityResolver = DeleteManyMealAvailabilityResolver;
