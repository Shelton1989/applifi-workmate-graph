"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingMethodUpsertWithWhereUniqueWithoutPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShippingMethodCreateWithoutPriceInput_1 = require("../inputs/ShippingMethodCreateWithoutPriceInput");
const ShippingMethodUpdateWithoutPriceInput_1 = require("../inputs/ShippingMethodUpdateWithoutPriceInput");
const ShippingMethodWhereUniqueInput_1 = require("../inputs/ShippingMethodWhereUniqueInput");
let ShippingMethodUpsertWithWhereUniqueWithoutPriceInput = class ShippingMethodUpsertWithWhereUniqueWithoutPriceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodWhereUniqueInput_1.ShippingMethodWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShippingMethodWhereUniqueInput_1.ShippingMethodWhereUniqueInput)
], ShippingMethodUpsertWithWhereUniqueWithoutPriceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodUpdateWithoutPriceInput_1.ShippingMethodUpdateWithoutPriceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShippingMethodUpdateWithoutPriceInput_1.ShippingMethodUpdateWithoutPriceInput)
], ShippingMethodUpsertWithWhereUniqueWithoutPriceInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodCreateWithoutPriceInput_1.ShippingMethodCreateWithoutPriceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShippingMethodCreateWithoutPriceInput_1.ShippingMethodCreateWithoutPriceInput)
], ShippingMethodUpsertWithWhereUniqueWithoutPriceInput.prototype, "create", void 0);
ShippingMethodUpsertWithWhereUniqueWithoutPriceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShippingMethodUpsertWithWhereUniqueWithoutPriceInput", {
        isAbstract: true
    })
], ShippingMethodUpsertWithWhereUniqueWithoutPriceInput);
exports.ShippingMethodUpsertWithWhereUniqueWithoutPriceInput = ShippingMethodUpsertWithWhereUniqueWithoutPriceInput;
