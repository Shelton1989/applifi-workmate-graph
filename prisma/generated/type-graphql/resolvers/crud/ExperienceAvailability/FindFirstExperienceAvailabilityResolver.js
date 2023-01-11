"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstExperienceAvailabilityResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstExperienceAvailabilityArgs_1 = require("./args/FindFirstExperienceAvailabilityArgs");
const ExperienceAvailability_1 = require("../../../models/ExperienceAvailability");
const helpers_1 = require("../../../helpers");
let FindFirstExperienceAvailabilityResolver = class FindFirstExperienceAvailabilityResolver {
    async findFirstExperienceAvailability(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).experienceAvailability.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstExperienceAvailabilityArgs_1.FindFirstExperienceAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstExperienceAvailabilityResolver.prototype, "findFirstExperienceAvailability", null);
FindFirstExperienceAvailabilityResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ExperienceAvailability_1.ExperienceAvailability)
], FindFirstExperienceAvailabilityResolver);
exports.FindFirstExperienceAvailabilityResolver = FindFirstExperienceAvailabilityResolver;
