"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySeasonSeriesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupBySeasonSeriesArgs_1 = require("./args/GroupBySeasonSeriesArgs");
const SeasonSeries_1 = require("../../../models/SeasonSeries");
const SeasonSeriesGroupBy_1 = require("../../outputs/SeasonSeriesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupBySeasonSeriesResolver = class GroupBySeasonSeriesResolver {
    async groupBySeasonSeries(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).seasonSeries.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SeasonSeriesGroupBy_1.SeasonSeriesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySeasonSeriesArgs_1.GroupBySeasonSeriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupBySeasonSeriesResolver.prototype, "groupBySeasonSeries", null);
GroupBySeasonSeriesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SeasonSeries_1.SeasonSeries)
], GroupBySeasonSeriesResolver);
exports.GroupBySeasonSeriesResolver = GroupBySeasonSeriesResolver;
