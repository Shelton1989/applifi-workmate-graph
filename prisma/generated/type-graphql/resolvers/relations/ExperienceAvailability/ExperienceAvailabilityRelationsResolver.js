"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceAvailabilityRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Experience_1 = require("../../../models/Experience");
const ExperienceAvailability_1 = require("../../../models/ExperienceAvailability");
const helpers_1 = require("../../../helpers");
let ExperienceAvailabilityRelationsResolver = class ExperienceAvailabilityRelationsResolver {
    async Experience(experienceAvailability, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).experienceAvailability.findUnique({
            where: {
                id: experienceAvailability.id,
            },
        }).Experience({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Experience_1.Experience, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ExperienceAvailability_1.ExperienceAvailability, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ExperienceAvailabilityRelationsResolver.prototype, "Experience", null);
ExperienceAvailabilityRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ExperienceAvailability_1.ExperienceAvailability)
], ExperienceAvailabilityRelationsResolver);
exports.ExperienceAvailabilityRelationsResolver = ExperienceAvailabilityRelationsResolver;
