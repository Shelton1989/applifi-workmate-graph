"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateManySelectedShippingAddressInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManySelectedShippingAddressInput_1 = require("../inputs/OrderCreateManySelectedShippingAddressInput");
let OrderCreateManySelectedShippingAddressInputEnvelope = class OrderCreateManySelectedShippingAddressInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateManySelectedShippingAddressInput_1.OrderCreateManySelectedShippingAddressInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateManySelectedShippingAddressInputEnvelope.prototype, "data", void 0);
OrderCreateManySelectedShippingAddressInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateManySelectedShippingAddressInputEnvelope", {
        isAbstract: true
    })
], OrderCreateManySelectedShippingAddressInputEnvelope);
exports.OrderCreateManySelectedShippingAddressInputEnvelope = OrderCreateManySelectedShippingAddressInputEnvelope;
