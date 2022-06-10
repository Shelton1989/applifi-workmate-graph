"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByReplyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReplyOrderByWithAggregationInput_1 = require("../../../inputs/ReplyOrderByWithAggregationInput");
const ReplyScalarWhereWithAggregatesInput_1 = require("../../../inputs/ReplyScalarWhereWithAggregatesInput");
const ReplyWhereInput_1 = require("../../../inputs/ReplyWhereInput");
const ReplyScalarFieldEnum_1 = require("../../../../enums/ReplyScalarFieldEnum");
let GroupByReplyArgs = class GroupByReplyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyWhereInput_1.ReplyWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyWhereInput_1.ReplyWhereInput)
], GroupByReplyArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyOrderByWithAggregationInput_1.ReplyOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByReplyArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyScalarFieldEnum_1.ReplyScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByReplyArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyScalarWhereWithAggregatesInput_1.ReplyScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyScalarWhereWithAggregatesInput_1.ReplyScalarWhereWithAggregatesInput)
], GroupByReplyArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByReplyArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByReplyArgs.prototype, "skip", void 0);
GroupByReplyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByReplyArgs);
exports.GroupByReplyArgs = GroupByReplyArgs;
