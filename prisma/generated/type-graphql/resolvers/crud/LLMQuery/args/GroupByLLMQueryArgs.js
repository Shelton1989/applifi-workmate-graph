"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByLLMQueryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LLMQueryOrderByWithAggregationInput_1 = require("../../../inputs/LLMQueryOrderByWithAggregationInput");
const LLMQueryScalarWhereWithAggregatesInput_1 = require("../../../inputs/LLMQueryScalarWhereWithAggregatesInput");
const LLMQueryWhereInput_1 = require("../../../inputs/LLMQueryWhereInput");
const LLMQueryScalarFieldEnum_1 = require("../../../../enums/LLMQueryScalarFieldEnum");
let GroupByLLMQueryArgs = class GroupByLLMQueryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryWhereInput_1.LLMQueryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LLMQueryWhereInput_1.LLMQueryWhereInput)
], GroupByLLMQueryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryOrderByWithAggregationInput_1.LLMQueryOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByLLMQueryArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LLMQueryScalarFieldEnum_1.LLMQueryScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByLLMQueryArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryScalarWhereWithAggregatesInput_1.LLMQueryScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LLMQueryScalarWhereWithAggregatesInput_1.LLMQueryScalarWhereWithAggregatesInput)
], GroupByLLMQueryArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByLLMQueryArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByLLMQueryArgs.prototype, "skip", void 0);
GroupByLLMQueryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByLLMQueryArgs);
exports.GroupByLLMQueryArgs = GroupByLLMQueryArgs;
