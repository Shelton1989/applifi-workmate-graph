"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateManySelectedMealItemOptionInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateManySelectedMealItemOptionInput_1 = require("../inputs/OrderLineItemCreateManySelectedMealItemOptionInput");
let OrderLineItemCreateManySelectedMealItemOptionInputEnvelope = class OrderLineItemCreateManySelectedMealItemOptionInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateManySelectedMealItemOptionInput_1.OrderLineItemCreateManySelectedMealItemOptionInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemCreateManySelectedMealItemOptionInputEnvelope.prototype, "data", void 0);
OrderLineItemCreateManySelectedMealItemOptionInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateManySelectedMealItemOptionInputEnvelope", {
        isAbstract: true
    })
], OrderLineItemCreateManySelectedMealItemOptionInputEnvelope);
exports.OrderLineItemCreateManySelectedMealItemOptionInputEnvelope = OrderLineItemCreateManySelectedMealItemOptionInputEnvelope;
