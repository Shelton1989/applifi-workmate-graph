"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByRequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RequestOrderByWithAggregationInput_1 = require("../../../inputs/RequestOrderByWithAggregationInput");
const RequestScalarWhereWithAggregatesInput_1 = require("../../../inputs/RequestScalarWhereWithAggregatesInput");
const RequestWhereInput_1 = require("../../../inputs/RequestWhereInput");
const RequestScalarFieldEnum_1 = require("../../../../enums/RequestScalarFieldEnum");
let GroupByRequestArgs = class GroupByRequestArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestWhereInput_1.RequestWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestWhereInput_1.RequestWhereInput)
], GroupByRequestArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RequestOrderByWithAggregationInput_1.RequestOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByRequestArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RequestScalarFieldEnum_1.RequestScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByRequestArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestScalarWhereWithAggregatesInput_1.RequestScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestScalarWhereWithAggregatesInput_1.RequestScalarWhereWithAggregatesInput)
], GroupByRequestArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByRequestArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByRequestArgs.prototype, "skip", void 0);
GroupByRequestArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByRequestArgs);
exports.GroupByRequestArgs = GroupByRequestArgs;
