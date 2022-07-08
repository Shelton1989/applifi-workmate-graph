"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateManyBuyerInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManyBuyerInput_1 = require("../inputs/OrderCreateManyBuyerInput");
let OrderCreateManyBuyerInputEnvelope = class OrderCreateManyBuyerInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateManyBuyerInput_1.OrderCreateManyBuyerInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateManyBuyerInputEnvelope.prototype, "data", void 0);
OrderCreateManyBuyerInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateManyBuyerInputEnvelope", {
        isAbstract: true
    })
], OrderCreateManyBuyerInputEnvelope);
exports.OrderCreateManyBuyerInputEnvelope = OrderCreateManyBuyerInputEnvelope;
