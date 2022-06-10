"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingMethodUpdateWithWhereUniqueWithoutPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShippingMethodUpdateWithoutPriceInput_1 = require("../inputs/ShippingMethodUpdateWithoutPriceInput");
const ShippingMethodWhereUniqueInput_1 = require("../inputs/ShippingMethodWhereUniqueInput");
let ShippingMethodUpdateWithWhereUniqueWithoutPriceInput = class ShippingMethodUpdateWithWhereUniqueWithoutPriceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodWhereUniqueInput_1.ShippingMethodWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShippingMethodWhereUniqueInput_1.ShippingMethodWhereUniqueInput)
], ShippingMethodUpdateWithWhereUniqueWithoutPriceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodUpdateWithoutPriceInput_1.ShippingMethodUpdateWithoutPriceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShippingMethodUpdateWithoutPriceInput_1.ShippingMethodUpdateWithoutPriceInput)
], ShippingMethodUpdateWithWhereUniqueWithoutPriceInput.prototype, "data", void 0);
ShippingMethodUpdateWithWhereUniqueWithoutPriceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShippingMethodUpdateWithWhereUniqueWithoutPriceInput", {
        isAbstract: true
    })
], ShippingMethodUpdateWithWhereUniqueWithoutPriceInput);
exports.ShippingMethodUpdateWithWhereUniqueWithoutPriceInput = ShippingMethodUpdateWithWhereUniqueWithoutPriceInput;
