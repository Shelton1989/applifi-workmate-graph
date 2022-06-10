"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrderLineItemsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemOrderByWithRelationInput_1 = require("../../../inputs/OrderLineItemOrderByWithRelationInput");
const OrderLineItemWhereInput_1 = require("../../../inputs/OrderLineItemWhereInput");
const OrderLineItemWhereUniqueInput_1 = require("../../../inputs/OrderLineItemWhereUniqueInput");
const OrderLineItemScalarFieldEnum_1 = require("../../../../enums/OrderLineItemScalarFieldEnum");
let ProductOrderLineItemsArgs = class ProductOrderLineItemsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereInput_1.OrderLineItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereInput_1.OrderLineItemWhereInput)
], ProductOrderLineItemsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemOrderByWithRelationInput_1.OrderLineItemOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductOrderLineItemsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput)
], ProductOrderLineItemsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductOrderLineItemsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductOrderLineItemsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemScalarFieldEnum_1.OrderLineItemScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductOrderLineItemsArgs.prototype, "distinct", void 0);
ProductOrderLineItemsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], ProductOrderLineItemsArgs);
exports.ProductOrderLineItemsArgs = ProductOrderLineItemsArgs;
