"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateManySelectedMealItemInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateManySelectedMealItemInput_1 = require("../inputs/OrderLineItemCreateManySelectedMealItemInput");
let OrderLineItemCreateManySelectedMealItemInputEnvelope = class OrderLineItemCreateManySelectedMealItemInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateManySelectedMealItemInput_1.OrderLineItemCreateManySelectedMealItemInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemCreateManySelectedMealItemInputEnvelope.prototype, "data", void 0);
OrderLineItemCreateManySelectedMealItemInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateManySelectedMealItemInputEnvelope", {
        isAbstract: true
    })
], OrderLineItemCreateManySelectedMealItemInputEnvelope);
exports.OrderLineItemCreateManySelectedMealItemInputEnvelope = OrderLineItemCreateManySelectedMealItemInputEnvelope;
