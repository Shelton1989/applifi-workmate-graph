"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingMethodCreateOrConnectWithoutPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShippingMethodCreateWithoutPriceInput_1 = require("../inputs/ShippingMethodCreateWithoutPriceInput");
const ShippingMethodWhereUniqueInput_1 = require("../inputs/ShippingMethodWhereUniqueInput");
let ShippingMethodCreateOrConnectWithoutPriceInput = class ShippingMethodCreateOrConnectWithoutPriceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodWhereUniqueInput_1.ShippingMethodWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShippingMethodWhereUniqueInput_1.ShippingMethodWhereUniqueInput)
], ShippingMethodCreateOrConnectWithoutPriceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodCreateWithoutPriceInput_1.ShippingMethodCreateWithoutPriceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShippingMethodCreateWithoutPriceInput_1.ShippingMethodCreateWithoutPriceInput)
], ShippingMethodCreateOrConnectWithoutPriceInput.prototype, "create", void 0);
ShippingMethodCreateOrConnectWithoutPriceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShippingMethodCreateOrConnectWithoutPriceInput", {
        isAbstract: true
    })
], ShippingMethodCreateOrConnectWithoutPriceInput);
exports.ShippingMethodCreateOrConnectWithoutPriceInput = ShippingMethodCreateOrConnectWithoutPriceInput;
