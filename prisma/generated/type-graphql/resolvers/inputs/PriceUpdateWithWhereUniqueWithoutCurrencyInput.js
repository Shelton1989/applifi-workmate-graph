"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceUpdateWithWhereUniqueWithoutCurrencyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceUpdateWithoutCurrencyInput_1 = require("../inputs/PriceUpdateWithoutCurrencyInput");
const PriceWhereUniqueInput_1 = require("../inputs/PriceWhereUniqueInput");
let PriceUpdateWithWhereUniqueWithoutCurrencyInput = class PriceUpdateWithWhereUniqueWithoutCurrencyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], PriceUpdateWithWhereUniqueWithoutCurrencyInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpdateWithoutCurrencyInput_1.PriceUpdateWithoutCurrencyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceUpdateWithoutCurrencyInput_1.PriceUpdateWithoutCurrencyInput)
], PriceUpdateWithWhereUniqueWithoutCurrencyInput.prototype, "data", void 0);
PriceUpdateWithWhereUniqueWithoutCurrencyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceUpdateWithWhereUniqueWithoutCurrencyInput", {
        isAbstract: true
    })
], PriceUpdateWithWhereUniqueWithoutCurrencyInput);
exports.PriceUpdateWithWhereUniqueWithoutCurrencyInput = PriceUpdateWithWhereUniqueWithoutCurrencyInput;
