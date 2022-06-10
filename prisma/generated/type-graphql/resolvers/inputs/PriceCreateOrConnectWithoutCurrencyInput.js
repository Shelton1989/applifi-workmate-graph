"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateOrConnectWithoutCurrencyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceCreateWithoutCurrencyInput_1 = require("../inputs/PriceCreateWithoutCurrencyInput");
const PriceWhereUniqueInput_1 = require("../inputs/PriceWhereUniqueInput");
let PriceCreateOrConnectWithoutCurrencyInput = class PriceCreateOrConnectWithoutCurrencyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], PriceCreateOrConnectWithoutCurrencyInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateWithoutCurrencyInput_1.PriceCreateWithoutCurrencyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceCreateWithoutCurrencyInput_1.PriceCreateWithoutCurrencyInput)
], PriceCreateOrConnectWithoutCurrencyInput.prototype, "create", void 0);
PriceCreateOrConnectWithoutCurrencyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceCreateOrConnectWithoutCurrencyInput", {
        isAbstract: true
    })
], PriceCreateOrConnectWithoutCurrencyInput);
exports.PriceCreateOrConnectWithoutCurrencyInput = PriceCreateOrConnectWithoutCurrencyInput;
