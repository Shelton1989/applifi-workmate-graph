"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByReactionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOrderByWithAggregationInput_1 = require("../../../inputs/ReactionOrderByWithAggregationInput");
const ReactionScalarWhereWithAggregatesInput_1 = require("../../../inputs/ReactionScalarWhereWithAggregatesInput");
const ReactionWhereInput_1 = require("../../../inputs/ReactionWhereInput");
const ReactionScalarFieldEnum_1 = require("../../../../enums/ReactionScalarFieldEnum");
let GroupByReactionArgs = class GroupByReactionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereInput_1.ReactionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionWhereInput_1.ReactionWhereInput)
], GroupByReactionArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOrderByWithAggregationInput_1.ReactionOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByReactionArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionScalarFieldEnum_1.ReactionScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByReactionArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionScalarWhereWithAggregatesInput_1.ReactionScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionScalarWhereWithAggregatesInput_1.ReactionScalarWhereWithAggregatesInput)
], GroupByReactionArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByReactionArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByReactionArgs.prototype, "skip", void 0);
GroupByReactionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByReactionArgs);
exports.GroupByReactionArgs = GroupByReactionArgs;
