"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceUpdateManyWithoutCurrencyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceCreateManyCurrencyInputEnvelope_1 = require("../inputs/PriceCreateManyCurrencyInputEnvelope");
const PriceCreateOrConnectWithoutCurrencyInput_1 = require("../inputs/PriceCreateOrConnectWithoutCurrencyInput");
const PriceCreateWithoutCurrencyInput_1 = require("../inputs/PriceCreateWithoutCurrencyInput");
const PriceScalarWhereInput_1 = require("../inputs/PriceScalarWhereInput");
const PriceUpdateManyWithWhereWithoutCurrencyInput_1 = require("../inputs/PriceUpdateManyWithWhereWithoutCurrencyInput");
const PriceUpdateWithWhereUniqueWithoutCurrencyInput_1 = require("../inputs/PriceUpdateWithWhereUniqueWithoutCurrencyInput");
const PriceUpsertWithWhereUniqueWithoutCurrencyInput_1 = require("../inputs/PriceUpsertWithWhereUniqueWithoutCurrencyInput");
const PriceWhereUniqueInput_1 = require("../inputs/PriceWhereUniqueInput");
let PriceUpdateManyWithoutCurrencyInput = class PriceUpdateManyWithoutCurrencyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceCreateWithoutCurrencyInput_1.PriceCreateWithoutCurrencyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriceUpdateManyWithoutCurrencyInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceCreateOrConnectWithoutCurrencyInput_1.PriceCreateOrConnectWithoutCurrencyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriceUpdateManyWithoutCurrencyInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceUpsertWithWhereUniqueWithoutCurrencyInput_1.PriceUpsertWithWhereUniqueWithoutCurrencyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriceUpdateManyWithoutCurrencyInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateManyCurrencyInputEnvelope_1.PriceCreateManyCurrencyInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceCreateManyCurrencyInputEnvelope_1.PriceCreateManyCurrencyInputEnvelope)
], PriceUpdateManyWithoutCurrencyInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceWhereUniqueInput_1.PriceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriceUpdateManyWithoutCurrencyInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceWhereUniqueInput_1.PriceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriceUpdateManyWithoutCurrencyInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceWhereUniqueInput_1.PriceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriceUpdateManyWithoutCurrencyInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceWhereUniqueInput_1.PriceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriceUpdateManyWithoutCurrencyInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceUpdateWithWhereUniqueWithoutCurrencyInput_1.PriceUpdateWithWhereUniqueWithoutCurrencyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriceUpdateManyWithoutCurrencyInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceUpdateManyWithWhereWithoutCurrencyInput_1.PriceUpdateManyWithWhereWithoutCurrencyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriceUpdateManyWithoutCurrencyInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceScalarWhereInput_1.PriceScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriceUpdateManyWithoutCurrencyInput.prototype, "deleteMany", void 0);
PriceUpdateManyWithoutCurrencyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceUpdateManyWithoutCurrencyInput", {
        isAbstract: true
    })
], PriceUpdateManyWithoutCurrencyInput);
exports.PriceUpdateManyWithoutCurrencyInput = PriceUpdateManyWithoutCurrencyInput;
