"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertExperienceAvailabilityResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertExperienceAvailabilityArgs_1 = require("./args/UpsertExperienceAvailabilityArgs");
const ExperienceAvailability_1 = require("../../../models/ExperienceAvailability");
const helpers_1 = require("../../../helpers");
let UpsertExperienceAvailabilityResolver = class UpsertExperienceAvailabilityResolver {
    async upsertExperienceAvailability(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).experienceAvailability.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ExperienceAvailability_1.ExperienceAvailability, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertExperienceAvailabilityArgs_1.UpsertExperienceAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertExperienceAvailabilityResolver.prototype, "upsertExperienceAvailability", null);
UpsertExperienceAvailabilityResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ExperienceAvailability_1.ExperienceAvailability)
], UpsertExperienceAvailabilityResolver);
exports.UpsertExperienceAvailabilityResolver = UpsertExperienceAvailabilityResolver;
