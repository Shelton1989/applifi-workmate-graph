"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateManyLineItemPriceInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateManyLineItemPriceInput_1 = require("../inputs/OrderLineItemCreateManyLineItemPriceInput");
let OrderLineItemCreateManyLineItemPriceInputEnvelope = class OrderLineItemCreateManyLineItemPriceInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateManyLineItemPriceInput_1.OrderLineItemCreateManyLineItemPriceInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemCreateManyLineItemPriceInputEnvelope.prototype, "data", void 0);
OrderLineItemCreateManyLineItemPriceInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateManyLineItemPriceInputEnvelope", {
        isAbstract: true
    })
], OrderLineItemCreateManyLineItemPriceInputEnvelope);
exports.OrderLineItemCreateManyLineItemPriceInputEnvelope = OrderLineItemCreateManyLineItemPriceInputEnvelope;
