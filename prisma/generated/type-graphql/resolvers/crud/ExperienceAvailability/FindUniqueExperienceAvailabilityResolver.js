"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueExperienceAvailabilityResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueExperienceAvailabilityArgs_1 = require("./args/FindUniqueExperienceAvailabilityArgs");
const ExperienceAvailability_1 = require("../../../models/ExperienceAvailability");
const helpers_1 = require("../../../helpers");
let FindUniqueExperienceAvailabilityResolver = class FindUniqueExperienceAvailabilityResolver {
    async experienceAvailability(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).experienceAvailability.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ExperienceAvailability_1.ExperienceAvailability, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueExperienceAvailabilityArgs_1.FindUniqueExperienceAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueExperienceAvailabilityResolver.prototype, "experienceAvailability", null);
FindUniqueExperienceAvailabilityResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ExperienceAvailability_1.ExperienceAvailability)
], FindUniqueExperienceAvailabilityResolver);
exports.FindUniqueExperienceAvailabilityResolver = FindUniqueExperienceAvailabilityResolver;
