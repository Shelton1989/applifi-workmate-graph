"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateManySelectedProductInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateManySelectedProductInput_1 = require("../inputs/OrderLineItemCreateManySelectedProductInput");
let OrderLineItemCreateManySelectedProductInputEnvelope = class OrderLineItemCreateManySelectedProductInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateManySelectedProductInput_1.OrderLineItemCreateManySelectedProductInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemCreateManySelectedProductInputEnvelope.prototype, "data", void 0);
OrderLineItemCreateManySelectedProductInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateManySelectedProductInputEnvelope", {
        isAbstract: true
    })
], OrderLineItemCreateManySelectedProductInputEnvelope);
exports.OrderLineItemCreateManySelectedProductInputEnvelope = OrderLineItemCreateManySelectedProductInputEnvelope;
