"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyUpdateWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const PriceUpdateManyWithoutCurrencyInput_1 = require("../inputs/PriceUpdateManyWithoutCurrencyInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let CurrencyUpdateWithoutTransactionsInput = class CurrencyUpdateWithoutTransactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CurrencyUpdateWithoutTransactionsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CurrencyUpdateWithoutTransactionsInput.prototype, "symbol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CurrencyUpdateWithoutTransactionsInput.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpdateManyWithoutCurrencyInput_1.PriceUpdateManyWithoutCurrencyInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceUpdateManyWithoutCurrencyInput_1.PriceUpdateManyWithoutCurrencyInput)
], CurrencyUpdateWithoutTransactionsInput.prototype, "prices", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CurrencyUpdateWithoutTransactionsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CurrencyUpdateWithoutTransactionsInput.prototype, "updatedAt", void 0);
CurrencyUpdateWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CurrencyUpdateWithoutTransactionsInput", {
        isAbstract: true
    })
], CurrencyUpdateWithoutTransactionsInput);
exports.CurrencyUpdateWithoutTransactionsInput = CurrencyUpdateWithoutTransactionsInput;
