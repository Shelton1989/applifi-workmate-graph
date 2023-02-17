"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyUpsertWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrencyCreateWithoutTransactionsInput_1 = require("../inputs/CurrencyCreateWithoutTransactionsInput");
const CurrencyUpdateWithoutTransactionsInput_1 = require("../inputs/CurrencyUpdateWithoutTransactionsInput");
let CurrencyUpsertWithoutTransactionsInput = class CurrencyUpsertWithoutTransactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyUpdateWithoutTransactionsInput_1.CurrencyUpdateWithoutTransactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CurrencyUpdateWithoutTransactionsInput_1.CurrencyUpdateWithoutTransactionsInput)
], CurrencyUpsertWithoutTransactionsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyCreateWithoutTransactionsInput_1.CurrencyCreateWithoutTransactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CurrencyCreateWithoutTransactionsInput_1.CurrencyCreateWithoutTransactionsInput)
], CurrencyUpsertWithoutTransactionsInput.prototype, "create", void 0);
CurrencyUpsertWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CurrencyUpsertWithoutTransactionsInput", {
        isAbstract: true
    })
], CurrencyUpsertWithoutTransactionsInput);
exports.CurrencyUpsertWithoutTransactionsInput = CurrencyUpsertWithoutTransactionsInput;
