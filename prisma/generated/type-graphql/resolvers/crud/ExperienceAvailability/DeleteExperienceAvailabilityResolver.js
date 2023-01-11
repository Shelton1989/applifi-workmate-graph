"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteExperienceAvailabilityResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteExperienceAvailabilityArgs_1 = require("./args/DeleteExperienceAvailabilityArgs");
const ExperienceAvailability_1 = require("../../../models/ExperienceAvailability");
const helpers_1 = require("../../../helpers");
let DeleteExperienceAvailabilityResolver = class DeleteExperienceAvailabilityResolver {
    async deleteExperienceAvailability(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).experienceAvailability.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ExperienceAvailability_1.ExperienceAvailability, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteExperienceAvailabilityArgs_1.DeleteExperienceAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteExperienceAvailabilityResolver.prototype, "deleteExperienceAvailability", null);
DeleteExperienceAvailabilityResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ExperienceAvailability_1.ExperienceAvailability)
], DeleteExperienceAvailabilityResolver);
exports.DeleteExperienceAvailabilityResolver = DeleteExperienceAvailabilityResolver;
