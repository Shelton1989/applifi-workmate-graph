"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUpdateManyWithoutCurrencyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateManyCurrencyInputEnvelope_1 = require("../inputs/TransactionCreateManyCurrencyInputEnvelope");
const TransactionCreateOrConnectWithoutCurrencyInput_1 = require("../inputs/TransactionCreateOrConnectWithoutCurrencyInput");
const TransactionCreateWithoutCurrencyInput_1 = require("../inputs/TransactionCreateWithoutCurrencyInput");
const TransactionScalarWhereInput_1 = require("../inputs/TransactionScalarWhereInput");
const TransactionUpdateManyWithWhereWithoutCurrencyInput_1 = require("../inputs/TransactionUpdateManyWithWhereWithoutCurrencyInput");
const TransactionUpdateWithWhereUniqueWithoutCurrencyInput_1 = require("../inputs/TransactionUpdateWithWhereUniqueWithoutCurrencyInput");
const TransactionUpsertWithWhereUniqueWithoutCurrencyInput_1 = require("../inputs/TransactionUpsertWithWhereUniqueWithoutCurrencyInput");
const TransactionWhereUniqueInput_1 = require("../inputs/TransactionWhereUniqueInput");
let TransactionUpdateManyWithoutCurrencyInput = class TransactionUpdateManyWithoutCurrencyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionCreateWithoutCurrencyInput_1.TransactionCreateWithoutCurrencyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutCurrencyInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionCreateOrConnectWithoutCurrencyInput_1.TransactionCreateOrConnectWithoutCurrencyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutCurrencyInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionUpsertWithWhereUniqueWithoutCurrencyInput_1.TransactionUpsertWithWhereUniqueWithoutCurrencyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutCurrencyInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateManyCurrencyInputEnvelope_1.TransactionCreateManyCurrencyInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionCreateManyCurrencyInputEnvelope_1.TransactionCreateManyCurrencyInputEnvelope)
], TransactionUpdateManyWithoutCurrencyInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereUniqueInput_1.TransactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutCurrencyInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereUniqueInput_1.TransactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutCurrencyInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereUniqueInput_1.TransactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutCurrencyInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereUniqueInput_1.TransactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutCurrencyInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionUpdateWithWhereUniqueWithoutCurrencyInput_1.TransactionUpdateWithWhereUniqueWithoutCurrencyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutCurrencyInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionUpdateManyWithWhereWithoutCurrencyInput_1.TransactionUpdateManyWithWhereWithoutCurrencyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutCurrencyInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionScalarWhereInput_1.TransactionScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutCurrencyInput.prototype, "deleteMany", void 0);
TransactionUpdateManyWithoutCurrencyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionUpdateManyWithoutCurrencyInput", {
        isAbstract: true
    })
], TransactionUpdateManyWithoutCurrencyInput);
exports.TransactionUpdateManyWithoutCurrencyInput = TransactionUpdateManyWithoutCurrencyInput;
