"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingMethodUpsertWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShippingMethodCreateWithoutOrdersInput_1 = require("../inputs/ShippingMethodCreateWithoutOrdersInput");
const ShippingMethodUpdateWithoutOrdersInput_1 = require("../inputs/ShippingMethodUpdateWithoutOrdersInput");
let ShippingMethodUpsertWithoutOrdersInput = class ShippingMethodUpsertWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodUpdateWithoutOrdersInput_1.ShippingMethodUpdateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShippingMethodUpdateWithoutOrdersInput_1.ShippingMethodUpdateWithoutOrdersInput)
], ShippingMethodUpsertWithoutOrdersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodCreateWithoutOrdersInput_1.ShippingMethodCreateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShippingMethodCreateWithoutOrdersInput_1.ShippingMethodCreateWithoutOrdersInput)
], ShippingMethodUpsertWithoutOrdersInput.prototype, "create", void 0);
ShippingMethodUpsertWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShippingMethodUpsertWithoutOrdersInput", {
        isAbstract: true
    })
], ShippingMethodUpsertWithoutOrdersInput);
exports.ShippingMethodUpsertWithoutOrdersInput = ShippingMethodUpsertWithoutOrdersInput;
