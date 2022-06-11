"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceOrderLineItemsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemOrderByWithRelationInput_1 = require("../../../inputs/OrderLineItemOrderByWithRelationInput");
const OrderLineItemWhereInput_1 = require("../../../inputs/OrderLineItemWhereInput");
const OrderLineItemWhereUniqueInput_1 = require("../../../inputs/OrderLineItemWhereUniqueInput");
const OrderLineItemScalarFieldEnum_1 = require("../../../../enums/OrderLineItemScalarFieldEnum");
let PriceOrderLineItemsArgs = class PriceOrderLineItemsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereInput_1.OrderLineItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereInput_1.OrderLineItemWhereInput)
], PriceOrderLineItemsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemOrderByWithRelationInput_1.OrderLineItemOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriceOrderLineItemsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput)
], PriceOrderLineItemsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PriceOrderLineItemsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PriceOrderLineItemsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemScalarFieldEnum_1.OrderLineItemScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriceOrderLineItemsArgs.prototype, "distinct", void 0);
PriceOrderLineItemsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], PriceOrderLineItemsArgs);
exports.PriceOrderLineItemsArgs = PriceOrderLineItemsArgs;