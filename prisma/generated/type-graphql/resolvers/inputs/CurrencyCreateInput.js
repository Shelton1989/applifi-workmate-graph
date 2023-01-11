"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceCreateNestedManyWithoutCurrencyInput_1 = require("../inputs/PriceCreateNestedManyWithoutCurrencyInput");
let CurrencyCreateInput = class CurrencyCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyCreateInput.prototype, "symbol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CurrencyCreateInput.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateNestedManyWithoutCurrencyInput_1.PriceCreateNestedManyWithoutCurrencyInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceCreateNestedManyWithoutCurrencyInput_1.PriceCreateNestedManyWithoutCurrencyInput)
], CurrencyCreateInput.prototype, "prices", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CurrencyCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CurrencyCreateInput.prototype, "updatedAt", void 0);
CurrencyCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CurrencyCreateInput", {
        isAbstract: true
    })
], CurrencyCreateInput);
exports.CurrencyCreateInput = CurrencyCreateInput;
