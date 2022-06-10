"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateManySelectedColorInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateManySelectedColorInput_1 = require("../inputs/OrderLineItemCreateManySelectedColorInput");
let OrderLineItemCreateManySelectedColorInputEnvelope = class OrderLineItemCreateManySelectedColorInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateManySelectedColorInput_1.OrderLineItemCreateManySelectedColorInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemCreateManySelectedColorInputEnvelope.prototype, "data", void 0);
OrderLineItemCreateManySelectedColorInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateManySelectedColorInputEnvelope", {
        isAbstract: true
    })
], OrderLineItemCreateManySelectedColorInputEnvelope);
exports.OrderLineItemCreateManySelectedColorInputEnvelope = OrderLineItemCreateManySelectedColorInputEnvelope;
