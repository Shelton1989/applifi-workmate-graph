"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSeasonSeriesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueSeasonSeriesArgs_1 = require("./args/FindUniqueSeasonSeriesArgs");
const SeasonSeries_1 = require("../../../models/SeasonSeries");
const helpers_1 = require("../../../helpers");
let FindUniqueSeasonSeriesResolver = class FindUniqueSeasonSeriesResolver {
    async findUniqueSeasonSeries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).seasonSeries.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => SeasonSeries_1.SeasonSeries, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSeasonSeriesArgs_1.FindUniqueSeasonSeriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueSeasonSeriesResolver.prototype, "findUniqueSeasonSeries", null);
FindUniqueSeasonSeriesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SeasonSeries_1.SeasonSeries)
], FindUniqueSeasonSeriesResolver);
exports.FindUniqueSeasonSeriesResolver = FindUniqueSeasonSeriesResolver;
