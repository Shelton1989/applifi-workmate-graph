"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertSeasonSeriesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertSeasonSeriesArgs_1 = require("./args/UpsertSeasonSeriesArgs");
const SeasonSeries_1 = require("../../../models/SeasonSeries");
const helpers_1 = require("../../../helpers");
let UpsertSeasonSeriesResolver = class UpsertSeasonSeriesResolver {
    async upsertSeasonSeries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).seasonSeries.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => SeasonSeries_1.SeasonSeries, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertSeasonSeriesArgs_1.UpsertSeasonSeriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertSeasonSeriesResolver.prototype, "upsertSeasonSeries", null);
UpsertSeasonSeriesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SeasonSeries_1.SeasonSeries)
], UpsertSeasonSeriesResolver);
exports.UpsertSeasonSeriesResolver = UpsertSeasonSeriesResolver;
