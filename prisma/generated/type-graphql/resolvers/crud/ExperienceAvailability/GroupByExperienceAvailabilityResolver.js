"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByExperienceAvailabilityResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByExperienceAvailabilityArgs_1 = require("./args/GroupByExperienceAvailabilityArgs");
const ExperienceAvailability_1 = require("../../../models/ExperienceAvailability");
const ExperienceAvailabilityGroupBy_1 = require("../../outputs/ExperienceAvailabilityGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByExperienceAvailabilityResolver = class GroupByExperienceAvailabilityResolver {
    async groupByExperienceAvailability(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).experienceAvailability.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ExperienceAvailabilityGroupBy_1.ExperienceAvailabilityGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByExperienceAvailabilityArgs_1.GroupByExperienceAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByExperienceAvailabilityResolver.prototype, "groupByExperienceAvailability", null);
GroupByExperienceAvailabilityResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ExperienceAvailability_1.ExperienceAvailability)
], GroupByExperienceAvailabilityResolver);
exports.GroupByExperienceAvailabilityResolver = GroupByExperienceAvailabilityResolver;
