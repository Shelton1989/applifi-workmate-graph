"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAggregateRatingResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateAggregateRatingArgs_1 = require("./args/AggregateAggregateRatingArgs");
const AggregateRating_1 = require("../../../models/AggregateRating");
const AggregateAggregateRating_1 = require("../../outputs/AggregateAggregateRating");
const helpers_1 = require("../../../helpers");
let AggregateAggregateRatingResolver = class AggregateAggregateRatingResolver {
    async aggregateAggregateRating(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).aggregateRating.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateAggregateRating_1.AggregateAggregateRating, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateAggregateRatingArgs_1.AggregateAggregateRatingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateAggregateRatingResolver.prototype, "aggregateAggregateRating", null);
AggregateAggregateRatingResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => AggregateRating_1.AggregateRating)
], AggregateAggregateRatingResolver);
exports.AggregateAggregateRatingResolver = AggregateAggregateRatingResolver;
