"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByOrderLineItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemOrderByWithAggregationInput_1 = require("../../../inputs/OrderLineItemOrderByWithAggregationInput");
const OrderLineItemScalarWhereWithAggregatesInput_1 = require("../../../inputs/OrderLineItemScalarWhereWithAggregatesInput");
const OrderLineItemWhereInput_1 = require("../../../inputs/OrderLineItemWhereInput");
const OrderLineItemScalarFieldEnum_1 = require("../../../../enums/OrderLineItemScalarFieldEnum");
let GroupByOrderLineItemArgs = class GroupByOrderLineItemArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereInput_1.OrderLineItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereInput_1.OrderLineItemWhereInput)
], GroupByOrderLineItemArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemOrderByWithAggregationInput_1.OrderLineItemOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByOrderLineItemArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemScalarFieldEnum_1.OrderLineItemScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByOrderLineItemArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemScalarWhereWithAggregatesInput_1.OrderLineItemScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemScalarWhereWithAggregatesInput_1.OrderLineItemScalarWhereWithAggregatesInput)
], GroupByOrderLineItemArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByOrderLineItemArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByOrderLineItemArgs.prototype, "skip", void 0);
GroupByOrderLineItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByOrderLineItemArgs);
exports.GroupByOrderLineItemArgs = GroupByOrderLineItemArgs;
