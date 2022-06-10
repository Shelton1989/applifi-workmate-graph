"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceUpsertWithoutShippingMethodsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceCreateWithoutShippingMethodsInput_1 = require("../inputs/PriceCreateWithoutShippingMethodsInput");
const PriceUpdateWithoutShippingMethodsInput_1 = require("../inputs/PriceUpdateWithoutShippingMethodsInput");
let PriceUpsertWithoutShippingMethodsInput = class PriceUpsertWithoutShippingMethodsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpdateWithoutShippingMethodsInput_1.PriceUpdateWithoutShippingMethodsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceUpdateWithoutShippingMethodsInput_1.PriceUpdateWithoutShippingMethodsInput)
], PriceUpsertWithoutShippingMethodsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateWithoutShippingMethodsInput_1.PriceCreateWithoutShippingMethodsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceCreateWithoutShippingMethodsInput_1.PriceCreateWithoutShippingMethodsInput)
], PriceUpsertWithoutShippingMethodsInput.prototype, "create", void 0);
PriceUpsertWithoutShippingMethodsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceUpsertWithoutShippingMethodsInput", {
        isAbstract: true
    })
], PriceUpsertWithoutShippingMethodsInput);
exports.PriceUpsertWithoutShippingMethodsInput = PriceUpsertWithoutShippingMethodsInput;
