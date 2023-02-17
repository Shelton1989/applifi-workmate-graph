"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyCreateWithoutPricesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateNestedManyWithoutCurrencyInput_1 = require("../inputs/TransactionCreateNestedManyWithoutCurrencyInput");
let CurrencyCreateWithoutPricesInput = class CurrencyCreateWithoutPricesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyCreateWithoutPricesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyCreateWithoutPricesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyCreateWithoutPricesInput.prototype, "symbol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyCreateWithoutPricesInput.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateNestedManyWithoutCurrencyInput_1.TransactionCreateNestedManyWithoutCurrencyInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionCreateNestedManyWithoutCurrencyInput_1.TransactionCreateNestedManyWithoutCurrencyInput)
], CurrencyCreateWithoutPricesInput.prototype, "Transactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CurrencyCreateWithoutPricesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CurrencyCreateWithoutPricesInput.prototype, "updatedAt", void 0);
CurrencyCreateWithoutPricesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CurrencyCreateWithoutPricesInput", {
        isAbstract: true
    })
], CurrencyCreateWithoutPricesInput);
exports.CurrencyCreateWithoutPricesInput = CurrencyCreateWithoutPricesInput;
