"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceUpsertWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceCreateWithoutProductsInput_1 = require("../inputs/PriceCreateWithoutProductsInput");
const PriceUpdateWithoutProductsInput_1 = require("../inputs/PriceUpdateWithoutProductsInput");
let PriceUpsertWithoutProductsInput = class PriceUpsertWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpdateWithoutProductsInput_1.PriceUpdateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceUpdateWithoutProductsInput_1.PriceUpdateWithoutProductsInput)
], PriceUpsertWithoutProductsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateWithoutProductsInput_1.PriceCreateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceCreateWithoutProductsInput_1.PriceCreateWithoutProductsInput)
], PriceUpsertWithoutProductsInput.prototype, "create", void 0);
PriceUpsertWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceUpsertWithoutProductsInput", {
        isAbstract: true
    })
], PriceUpsertWithoutProductsInput);
exports.PriceUpsertWithoutProductsInput = PriceUpsertWithoutProductsInput;
