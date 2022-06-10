"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateOrConnectWithoutShippingMethodsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceCreateWithoutShippingMethodsInput_1 = require("../inputs/PriceCreateWithoutShippingMethodsInput");
const PriceWhereUniqueInput_1 = require("../inputs/PriceWhereUniqueInput");
let PriceCreateOrConnectWithoutShippingMethodsInput = class PriceCreateOrConnectWithoutShippingMethodsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], PriceCreateOrConnectWithoutShippingMethodsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateWithoutShippingMethodsInput_1.PriceCreateWithoutShippingMethodsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceCreateWithoutShippingMethodsInput_1.PriceCreateWithoutShippingMethodsInput)
], PriceCreateOrConnectWithoutShippingMethodsInput.prototype, "create", void 0);
PriceCreateOrConnectWithoutShippingMethodsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceCreateOrConnectWithoutShippingMethodsInput", {
        isAbstract: true
    })
], PriceCreateOrConnectWithoutShippingMethodsInput);
exports.PriceCreateOrConnectWithoutShippingMethodsInput = PriceCreateOrConnectWithoutShippingMethodsInput;
