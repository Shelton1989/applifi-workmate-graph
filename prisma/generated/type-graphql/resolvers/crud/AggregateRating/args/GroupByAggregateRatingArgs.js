"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAggregateRatingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingOrderByWithAggregationInput_1 = require("../../../inputs/AggregateRatingOrderByWithAggregationInput");
const AggregateRatingScalarWhereWithAggregatesInput_1 = require("../../../inputs/AggregateRatingScalarWhereWithAggregatesInput");
const AggregateRatingWhereInput_1 = require("../../../inputs/AggregateRatingWhereInput");
const AggregateRatingScalarFieldEnum_1 = require("../../../../enums/AggregateRatingScalarFieldEnum");
let GroupByAggregateRatingArgs = class GroupByAggregateRatingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingWhereInput_1.AggregateRatingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingWhereInput_1.AggregateRatingWhereInput)
], GroupByAggregateRatingArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AggregateRatingOrderByWithAggregationInput_1.AggregateRatingOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByAggregateRatingArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AggregateRatingScalarFieldEnum_1.AggregateRatingScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByAggregateRatingArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingScalarWhereWithAggregatesInput_1.AggregateRatingScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingScalarWhereWithAggregatesInput_1.AggregateRatingScalarWhereWithAggregatesInput)
], GroupByAggregateRatingArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByAggregateRatingArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByAggregateRatingArgs.prototype, "skip", void 0);
GroupByAggregateRatingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByAggregateRatingArgs);
exports.GroupByAggregateRatingArgs = GroupByAggregateRatingArgs;
