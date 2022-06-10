"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateNestedOneWithoutShippingMethodsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceCreateOrConnectWithoutShippingMethodsInput_1 = require("../inputs/PriceCreateOrConnectWithoutShippingMethodsInput");
const PriceCreateWithoutShippingMethodsInput_1 = require("../inputs/PriceCreateWithoutShippingMethodsInput");
const PriceWhereUniqueInput_1 = require("../inputs/PriceWhereUniqueInput");
let PriceCreateNestedOneWithoutShippingMethodsInput = class PriceCreateNestedOneWithoutShippingMethodsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateWithoutShippingMethodsInput_1.PriceCreateWithoutShippingMethodsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceCreateWithoutShippingMethodsInput_1.PriceCreateWithoutShippingMethodsInput)
], PriceCreateNestedOneWithoutShippingMethodsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateOrConnectWithoutShippingMethodsInput_1.PriceCreateOrConnectWithoutShippingMethodsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceCreateOrConnectWithoutShippingMethodsInput_1.PriceCreateOrConnectWithoutShippingMethodsInput)
], PriceCreateNestedOneWithoutShippingMethodsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], PriceCreateNestedOneWithoutShippingMethodsInput.prototype, "connect", void 0);
PriceCreateNestedOneWithoutShippingMethodsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceCreateNestedOneWithoutShippingMethodsInput", {
        isAbstract: true
    })
], PriceCreateNestedOneWithoutShippingMethodsInput);
exports.PriceCreateNestedOneWithoutShippingMethodsInput = PriceCreateNestedOneWithoutShippingMethodsInput;
