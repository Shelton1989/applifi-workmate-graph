"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRating_1 = require("../../../models/AggregateRating");
const Experience_1 = require("../../../models/Experience");
const helpers_1 = require("../../../helpers");
let AggregateRatingRelationsResolver = class AggregateRatingRelationsResolver {
    async Experience(aggregateRating, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).aggregateRating.findUnique({
            where: {
                id: aggregateRating.id,
            },
        }).Experience({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Experience_1.Experience, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [AggregateRating_1.AggregateRating, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateRatingRelationsResolver.prototype, "Experience", null);
AggregateRatingRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => AggregateRating_1.AggregateRating)
], AggregateRatingRelationsResolver);
exports.AggregateRatingRelationsResolver = AggregateRatingRelationsResolver;
