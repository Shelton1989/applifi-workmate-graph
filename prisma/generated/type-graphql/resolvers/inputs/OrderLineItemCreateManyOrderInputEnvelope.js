"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateManyOrderInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateManyOrderInput_1 = require("../inputs/OrderLineItemCreateManyOrderInput");
let OrderLineItemCreateManyOrderInputEnvelope = class OrderLineItemCreateManyOrderInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateManyOrderInput_1.OrderLineItemCreateManyOrderInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemCreateManyOrderInputEnvelope.prototype, "data", void 0);
OrderLineItemCreateManyOrderInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateManyOrderInputEnvelope", {
        isAbstract: true
    })
], OrderLineItemCreateManyOrderInputEnvelope);
exports.OrderLineItemCreateManyOrderInputEnvelope = OrderLineItemCreateManyOrderInputEnvelope;
