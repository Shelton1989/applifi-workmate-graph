"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingMethodCreateManyPriceInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShippingMethodCreateManyPriceInput_1 = require("../inputs/ShippingMethodCreateManyPriceInput");
let ShippingMethodCreateManyPriceInputEnvelope = class ShippingMethodCreateManyPriceInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShippingMethodCreateManyPriceInput_1.ShippingMethodCreateManyPriceInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ShippingMethodCreateManyPriceInputEnvelope.prototype, "data", void 0);
ShippingMethodCreateManyPriceInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ShippingMethodCreateManyPriceInputEnvelope", {
        isAbstract: true
    })
], ShippingMethodCreateManyPriceInputEnvelope);
exports.ShippingMethodCreateManyPriceInputEnvelope = ShippingMethodCreateManyPriceInputEnvelope;
