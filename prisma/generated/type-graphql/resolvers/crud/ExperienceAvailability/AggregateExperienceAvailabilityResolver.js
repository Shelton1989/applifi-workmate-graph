"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateExperienceAvailabilityResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateExperienceAvailabilityArgs_1 = require("./args/AggregateExperienceAvailabilityArgs");
const ExperienceAvailability_1 = require("../../../models/ExperienceAvailability");
const AggregateExperienceAvailability_1 = require("../../outputs/AggregateExperienceAvailability");
const helpers_1 = require("../../../helpers");
let AggregateExperienceAvailabilityResolver = class AggregateExperienceAvailabilityResolver {
    async aggregateExperienceAvailability(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).experienceAvailability.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateExperienceAvailability_1.AggregateExperienceAvailability, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateExperienceAvailabilityArgs_1.AggregateExperienceAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateExperienceAvailabilityResolver.prototype, "aggregateExperienceAvailability", null);
AggregateExperienceAvailabilityResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ExperienceAvailability_1.ExperienceAvailability)
], AggregateExperienceAvailabilityResolver);
exports.AggregateExperienceAvailabilityResolver = AggregateExperienceAvailabilityResolver;
