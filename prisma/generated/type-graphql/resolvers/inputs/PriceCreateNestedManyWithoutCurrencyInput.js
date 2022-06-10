"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateNestedManyWithoutCurrencyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceCreateManyCurrencyInputEnvelope_1 = require("../inputs/PriceCreateManyCurrencyInputEnvelope");
const PriceCreateOrConnectWithoutCurrencyInput_1 = require("../inputs/PriceCreateOrConnectWithoutCurrencyInput");
const PriceCreateWithoutCurrencyInput_1 = require("../inputs/PriceCreateWithoutCurrencyInput");
const PriceWhereUniqueInput_1 = require("../inputs/PriceWhereUniqueInput");
let PriceCreateNestedManyWithoutCurrencyInput = class PriceCreateNestedManyWithoutCurrencyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceCreateWithoutCurrencyInput_1.PriceCreateWithoutCurrencyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriceCreateNestedManyWithoutCurrencyInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceCreateOrConnectWithoutCurrencyInput_1.PriceCreateOrConnectWithoutCurrencyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriceCreateNestedManyWithoutCurrencyInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateManyCurrencyInputEnvelope_1.PriceCreateManyCurrencyInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceCreateManyCurrencyInputEnvelope_1.PriceCreateManyCurrencyInputEnvelope)
], PriceCreateNestedManyWithoutCurrencyInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceWhereUniqueInput_1.PriceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriceCreateNestedManyWithoutCurrencyInput.prototype, "connect", void 0);
PriceCreateNestedManyWithoutCurrencyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceCreateNestedManyWithoutCurrencyInput", {
        isAbstract: true
    })
], PriceCreateNestedManyWithoutCurrencyInput);
exports.PriceCreateNestedManyWithoutCurrencyInput = PriceCreateNestedManyWithoutCurrencyInput;
