"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyCreateWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceCreateNestedManyWithoutCurrencyInput_1 = require("../inputs/PriceCreateNestedManyWithoutCurrencyInput");
let CurrencyCreateWithoutTransactionsInput = class CurrencyCreateWithoutTransactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyCreateWithoutTransactionsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyCreateWithoutTransactionsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyCreateWithoutTransactionsInput.prototype, "symbol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyCreateWithoutTransactionsInput.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateNestedManyWithoutCurrencyInput_1.PriceCreateNestedManyWithoutCurrencyInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceCreateNestedManyWithoutCurrencyInput_1.PriceCreateNestedManyWithoutCurrencyInput)
], CurrencyCreateWithoutTransactionsInput.prototype, "prices", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CurrencyCreateWithoutTransactionsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CurrencyCreateWithoutTransactionsInput.prototype, "updatedAt", void 0);
CurrencyCreateWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CurrencyCreateWithoutTransactionsInput", {
        isAbstract: true
    })
], CurrencyCreateWithoutTransactionsInput);
exports.CurrencyCreateWithoutTransactionsInput = CurrencyCreateWithoutTransactionsInput;
