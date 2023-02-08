"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAggregateRatingResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateManyAggregateRatingArgs_1 = require("./args/CreateManyAggregateRatingArgs");
const AggregateRating_1 = require("../../../models/AggregateRating");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyAggregateRatingResolver = class CreateManyAggregateRatingResolver {
    async createManyAggregateRating(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).aggregateRating.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAggregateRatingArgs_1.CreateManyAggregateRatingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyAggregateRatingResolver.prototype, "createManyAggregateRating", null);
CreateManyAggregateRatingResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => AggregateRating_1.AggregateRating)
], CreateManyAggregateRatingResolver);
exports.CreateManyAggregateRatingResolver = CreateManyAggregateRatingResolver;