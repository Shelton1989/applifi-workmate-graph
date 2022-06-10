"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceUpsertWithWhereUniqueWithoutCurrencyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceCreateWithoutCurrencyInput_1 = require("../inputs/PriceCreateWithoutCurrencyInput");
const PriceUpdateWithoutCurrencyInput_1 = require("../inputs/PriceUpdateWithoutCurrencyInput");
const PriceWhereUniqueInput_1 = require("../inputs/PriceWhereUniqueInput");
let PriceUpsertWithWhereUniqueWithoutCurrencyInput = class PriceUpsertWithWhereUniqueWithoutCurrencyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], PriceUpsertWithWhereUniqueWithoutCurrencyInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpdateWithoutCurrencyInput_1.PriceUpdateWithoutCurrencyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceUpdateWithoutCurrencyInput_1.PriceUpdateWithoutCurrencyInput)
], PriceUpsertWithWhereUniqueWithoutCurrencyInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateWithoutCurrencyInput_1.PriceCreateWithoutCurrencyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceCreateWithoutCurrencyInput_1.PriceCreateWithoutCurrencyInput)
], PriceUpsertWithWhereUniqueWithoutCurrencyInput.prototype, "create", void 0);
PriceUpsertWithWhereUniqueWithoutCurrencyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceUpsertWithWhereUniqueWithoutCurrencyInput", {
        isAbstract: true
    })
], PriceUpsertWithWhereUniqueWithoutCurrencyInput);
exports.PriceUpsertWithWhereUniqueWithoutCurrencyInput = PriceUpsertWithWhereUniqueWithoutCurrencyInput;
