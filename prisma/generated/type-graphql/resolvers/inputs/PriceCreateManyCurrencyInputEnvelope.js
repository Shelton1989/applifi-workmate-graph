"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateManyCurrencyInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceCreateManyCurrencyInput_1 = require("../inputs/PriceCreateManyCurrencyInput");
let PriceCreateManyCurrencyInputEnvelope = class PriceCreateManyCurrencyInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceCreateManyCurrencyInput_1.PriceCreateManyCurrencyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], PriceCreateManyCurrencyInputEnvelope.prototype, "data", void 0);
PriceCreateManyCurrencyInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceCreateManyCurrencyInputEnvelope", {
        isAbstract: true
    })
], PriceCreateManyCurrencyInputEnvelope);
exports.PriceCreateManyCurrencyInputEnvelope = PriceCreateManyCurrencyInputEnvelope;
