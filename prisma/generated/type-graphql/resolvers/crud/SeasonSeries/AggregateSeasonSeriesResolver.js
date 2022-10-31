"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSeasonSeriesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateSeasonSeriesArgs_1 = require("./args/AggregateSeasonSeriesArgs");
const SeasonSeries_1 = require("../../../models/SeasonSeries");
const AggregateSeasonSeries_1 = require("../../outputs/AggregateSeasonSeries");
const helpers_1 = require("../../../helpers");
let AggregateSeasonSeriesResolver = class AggregateSeasonSeriesResolver {
    async aggregateSeasonSeries(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).seasonSeries.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSeasonSeries_1.AggregateSeasonSeries, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSeasonSeriesArgs_1.AggregateSeasonSeriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateSeasonSeriesResolver.prototype, "aggregateSeasonSeries", null);
AggregateSeasonSeriesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SeasonSeries_1.SeasonSeries)
], AggregateSeasonSeriesResolver);
exports.AggregateSeasonSeriesResolver = AggregateSeasonSeriesResolver;
