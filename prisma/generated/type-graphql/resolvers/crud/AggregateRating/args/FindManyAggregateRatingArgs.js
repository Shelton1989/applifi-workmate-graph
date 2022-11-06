"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyAggregateRatingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingOrderByWithRelationInput_1 = require("../../../inputs/AggregateRatingOrderByWithRelationInput");
const AggregateRatingWhereInput_1 = require("../../../inputs/AggregateRatingWhereInput");
const AggregateRatingWhereUniqueInput_1 = require("../../../inputs/AggregateRatingWhereUniqueInput");
const AggregateRatingScalarFieldEnum_1 = require("../../../../enums/AggregateRatingScalarFieldEnum");
let FindManyAggregateRatingArgs = class FindManyAggregateRatingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingWhereInput_1.AggregateRatingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingWhereInput_1.AggregateRatingWhereInput)
], FindManyAggregateRatingArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AggregateRatingOrderByWithRelationInput_1.AggregateRatingOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyAggregateRatingArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput)
], FindManyAggregateRatingArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyAggregateRatingArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyAggregateRatingArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AggregateRatingScalarFieldEnum_1.AggregateRatingScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyAggregateRatingArgs.prototype, "distinct", void 0);
FindManyAggregateRatingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyAggregateRatingArgs);
exports.FindManyAggregateRatingArgs = FindManyAggregateRatingArgs;
