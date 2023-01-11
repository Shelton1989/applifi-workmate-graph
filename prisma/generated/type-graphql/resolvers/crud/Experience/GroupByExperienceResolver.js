"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByExperienceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByExperienceArgs_1 = require("./args/GroupByExperienceArgs");
const Experience_1 = require("../../../models/Experience");
const ExperienceGroupBy_1 = require("../../outputs/ExperienceGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByExperienceResolver = class GroupByExperienceResolver {
    async groupByExperience(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).experience.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ExperienceGroupBy_1.ExperienceGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByExperienceArgs_1.GroupByExperienceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByExperienceResolver.prototype, "groupByExperience", null);
GroupByExperienceResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Experience_1.Experience)
], GroupByExperienceResolver);
exports.GroupByExperienceResolver = GroupByExperienceResolver;
