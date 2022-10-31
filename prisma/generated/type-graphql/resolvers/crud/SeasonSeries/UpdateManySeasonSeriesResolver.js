"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySeasonSeriesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManySeasonSeriesArgs_1 = require("./args/UpdateManySeasonSeriesArgs");
const SeasonSeries_1 = require("../../../models/SeasonSeries");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManySeasonSeriesResolver = class UpdateManySeasonSeriesResolver {
    async updateManySeasonSeries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).seasonSeries.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManySeasonSeriesArgs_1.UpdateManySeasonSeriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManySeasonSeriesResolver.prototype, "updateManySeasonSeries", null);
UpdateManySeasonSeriesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SeasonSeries_1.SeasonSeries)
], UpdateManySeasonSeriesResolver);
exports.UpdateManySeasonSeriesResolver = UpdateManySeasonSeriesResolver;
