"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyAggregateRatingResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManyAggregateRatingArgs_1 = require("./args/UpdateManyAggregateRatingArgs");
const AggregateRating_1 = require("../../../models/AggregateRating");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyAggregateRatingResolver = class UpdateManyAggregateRatingResolver {
    async updateManyAggregateRating(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).aggregateRating.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyAggregateRatingArgs_1.UpdateManyAggregateRatingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyAggregateRatingResolver.prototype, "updateManyAggregateRating", null);
UpdateManyAggregateRatingResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => AggregateRating_1.AggregateRating)
], UpdateManyAggregateRatingResolver);
exports.UpdateManyAggregateRatingResolver = UpdateManyAggregateRatingResolver;
