"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateManySelectedShippingMethodInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManySelectedShippingMethodInput_1 = require("../inputs/OrderCreateManySelectedShippingMethodInput");
let OrderCreateManySelectedShippingMethodInputEnvelope = class OrderCreateManySelectedShippingMethodInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateManySelectedShippingMethodInput_1.OrderCreateManySelectedShippingMethodInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateManySelectedShippingMethodInputEnvelope.prototype, "data", void 0);
OrderCreateManySelectedShippingMethodInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateManySelectedShippingMethodInputEnvelope", {
        isAbstract: true
    })
], OrderCreateManySelectedShippingMethodInputEnvelope);
exports.OrderCreateManySelectedShippingMethodInputEnvelope = OrderCreateManySelectedShippingMethodInputEnvelope;
