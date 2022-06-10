"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingMethodCreateNestedOneWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShippingMethodCreateOrConnectWithoutOrdersInput_1 = require("../inputs/ShippingMethodCreateOrConnectWithoutOrdersInput");
const ShippingMethodCreateWithoutOrdersInput_1 = require("../inputs/ShippingMethodCreateWithoutOrdersInput");
const ShippingMethodWhereUniqueInput_1 = require("../inputs/ShippingMethodWhereUniqueInput");
let ShippingMethodCreateNestedOneWithoutOrdersInput = class ShippingMethodCreateNestedOneWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodCreateWithoutOrdersInput_1.ShippingMethodCreateWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodCreateWithoutOrdersInput_1.ShippingMethodCreateWithoutOrdersInput)
], ShippingMethodCreateNestedOneWithoutOrdersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodCreateOrConnectWithoutOrdersInput_1.ShippingMethodCreateOrConnectWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodCreateOrConnectWithoutOrdersInput_1.ShippingMethodCreateOrConnectWithoutOrdersInput)
], ShippingMethodCreateNestedOneWithoutOrdersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodWhereUniqueInput_1.ShippingMethodWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodWhereUniqueInput_1.ShippingMethodWhereUniqueInput)
], ShippingMethodCreateNestedOneWithoutOrdersInput.prototype, "connect", void 0);
ShippingMethodCreateNestedOneWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShippingMethodCreateNestedOneWithoutOrdersInput", {
        isAbstract: true
    })
], ShippingMethodCreateNestedOneWithoutOrdersInput);
exports.ShippingMethodCreateNestedOneWithoutOrdersInput = ShippingMethodCreateNestedOneWithoutOrdersInput;
