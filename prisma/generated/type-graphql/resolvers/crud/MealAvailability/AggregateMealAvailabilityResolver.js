"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMealAvailabilityResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateMealAvailabilityArgs_1 = require("./args/AggregateMealAvailabilityArgs");
const MealAvailability_1 = require("../../../models/MealAvailability");
const AggregateMealAvailability_1 = require("../../outputs/AggregateMealAvailability");
const helpers_1 = require("../../../helpers");
let AggregateMealAvailabilityResolver = class AggregateMealAvailabilityResolver {
    async aggregateMealAvailability(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).mealAvailability.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateMealAvailability_1.AggregateMealAvailability, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateMealAvailabilityArgs_1.AggregateMealAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateMealAvailabilityResolver.prototype, "aggregateMealAvailability", null);
AggregateMealAvailabilityResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => MealAvailability_1.MealAvailability)
], AggregateMealAvailabilityResolver);
exports.AggregateMealAvailabilityResolver = AggregateMealAvailabilityResolver;
