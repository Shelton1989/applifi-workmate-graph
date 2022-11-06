"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertAggregateRatingResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertAggregateRatingArgs_1 = require("./args/UpsertAggregateRatingArgs");
const AggregateRating_1 = require("../../../models/AggregateRating");
const Aggregateundefined_1 = require("../../outputs/Aggregateundefined");
const helpers_1 = require("../../../helpers");
let UpsertAggregateRatingResolver = class UpsertAggregateRatingResolver {
    async upsertAggregateRating(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).aggregateRating.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Aggregateundefined_1.Aggregateundefined, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertAggregateRatingArgs_1.UpsertAggregateRatingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertAggregateRatingResolver.prototype, "upsertAggregateRating", null);
UpsertAggregateRatingResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => AggregateRating_1.AggregateRating)
], UpsertAggregateRatingResolver);
exports.UpsertAggregateRatingResolver = UpsertAggregateRatingResolver;
