"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateManySelectedSizeInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateManySelectedSizeInput_1 = require("../inputs/OrderLineItemCreateManySelectedSizeInput");
let OrderLineItemCreateManySelectedSizeInputEnvelope = class OrderLineItemCreateManySelectedSizeInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateManySelectedSizeInput_1.OrderLineItemCreateManySelectedSizeInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemCreateManySelectedSizeInputEnvelope.prototype, "data", void 0);
OrderLineItemCreateManySelectedSizeInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateManySelectedSizeInputEnvelope", {
        isAbstract: true
    })
], OrderLineItemCreateManySelectedSizeInputEnvelope);
exports.OrderLineItemCreateManySelectedSizeInputEnvelope = OrderLineItemCreateManySelectedSizeInputEnvelope;
