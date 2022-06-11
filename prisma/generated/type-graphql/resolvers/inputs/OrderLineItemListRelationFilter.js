"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemWhereInput_1 = require("../inputs/OrderLineItemWhereInput");
let OrderLineItemListRelationFilter = class OrderLineItemListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereInput_1.OrderLineItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereInput_1.OrderLineItemWhereInput)
], OrderLineItemListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereInput_1.OrderLineItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereInput_1.OrderLineItemWhereInput)
], OrderLineItemListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereInput_1.OrderLineItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereInput_1.OrderLineItemWhereInput)
], OrderLineItemListRelationFilter.prototype, "none", void 0);
OrderLineItemListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemListRelationFilter", {
        isAbstract: true
    })
], OrderLineItemListRelationFilter);
exports.OrderLineItemListRelationFilter = OrderLineItemListRelationFilter;