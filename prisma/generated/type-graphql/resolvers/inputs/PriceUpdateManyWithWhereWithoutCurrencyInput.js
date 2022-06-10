"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceUpdateManyWithWhereWithoutCurrencyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceScalarWhereInput_1 = require("../inputs/PriceScalarWhereInput");
const PriceUpdateManyMutationInput_1 = require("../inputs/PriceUpdateManyMutationInput");
let PriceUpdateManyWithWhereWithoutCurrencyInput = class PriceUpdateManyWithWhereWithoutCurrencyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceScalarWhereInput_1.PriceScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceScalarWhereInput_1.PriceScalarWhereInput)
], PriceUpdateManyWithWhereWithoutCurrencyInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpdateManyMutationInput_1.PriceUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceUpdateManyMutationInput_1.PriceUpdateManyMutationInput)
], PriceUpdateManyWithWhereWithoutCurrencyInput.prototype, "data", void 0);
PriceUpdateManyWithWhereWithoutCurrencyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceUpdateManyWithWhereWithoutCurrencyInput", {
        isAbstract: true
    })
], PriceUpdateManyWithWhereWithoutCurrencyInput);
exports.PriceUpdateManyWithWhereWithoutCurrencyInput = PriceUpdateManyWithWhereWithoutCurrencyInput;
