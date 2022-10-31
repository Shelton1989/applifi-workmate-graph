"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByEpisodeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByEpisodeArgs_1 = require("./args/GroupByEpisodeArgs");
const Episode_1 = require("../../../models/Episode");
const EpisodeGroupBy_1 = require("../../outputs/EpisodeGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByEpisodeResolver = class GroupByEpisodeResolver {
    async groupByEpisode(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).episode.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [EpisodeGroupBy_1.EpisodeGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByEpisodeArgs_1.GroupByEpisodeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByEpisodeResolver.prototype, "groupByEpisode", null);
GroupByEpisodeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Episode_1.Episode)
], GroupByEpisodeResolver);
exports.GroupByEpisodeResolver = GroupByEpisodeResolver;
