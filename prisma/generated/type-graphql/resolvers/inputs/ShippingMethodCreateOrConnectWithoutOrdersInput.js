"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingMethodCreateOrConnectWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShippingMethodCreateWithoutOrdersInput_1 = require("../inputs/ShippingMethodCreateWithoutOrdersInput");
const ShippingMethodWhereUniqueInput_1 = require("../inputs/ShippingMethodWhereUniqueInput");
let ShippingMethodCreateOrConnectWithoutOrdersInput = class ShippingMethodCreateOrConnectWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodWhereUniqueInput_1.ShippingMethodWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShippingMethodWhereUniqueInput_1.ShippingMethodWhereUniqueInput)
], ShippingMethodCreateOrConnectWithoutOrdersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodCreateWithoutOrdersInput_1.ShippingMethodCreateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShippingMethodCreateWithoutOrdersInput_1.ShippingMethodCreateWithoutOrdersInput)
], ShippingMethodCreateOrConnectWithoutOrdersInput.prototype, "create", void 0);
ShippingMethodCreateOrConnectWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShippingMethodCreateOrConnectWithoutOrdersInput", {
        isAbstract: true
    })
], ShippingMethodCreateOrConnectWithoutOrdersInput);
exports.ShippingMethodCreateOrConnectWithoutOrdersInput = ShippingMethodCreateOrConnectWithoutOrdersInput;
