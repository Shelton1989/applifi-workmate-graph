"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyUpsertWithoutPricesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrencyCreateWithoutPricesInput_1 = require("../inputs/CurrencyCreateWithoutPricesInput");
const CurrencyUpdateWithoutPricesInput_1 = require("../inputs/CurrencyUpdateWithoutPricesInput");
let CurrencyUpsertWithoutPricesInput = class CurrencyUpsertWithoutPricesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyUpdateWithoutPricesInput_1.CurrencyUpdateWithoutPricesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CurrencyUpdateWithoutPricesInput_1.CurrencyUpdateWithoutPricesInput)
], CurrencyUpsertWithoutPricesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyCreateWithoutPricesInput_1.CurrencyCreateWithoutPricesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CurrencyCreateWithoutPricesInput_1.CurrencyCreateWithoutPricesInput)
], CurrencyUpsertWithoutPricesInput.prototype, "create", void 0);
CurrencyUpsertWithoutPricesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CurrencyUpsertWithoutPricesInput", {
        isAbstract: true
    })
], CurrencyUpsertWithoutPricesInput);
exports.CurrencyUpsertWithoutPricesInput = CurrencyUpsertWithoutPricesInput;
