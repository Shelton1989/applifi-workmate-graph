"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUpdateManyWithoutBookingOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateManyBookingOrderInputEnvelope_1 = require("../inputs/TransactionCreateManyBookingOrderInputEnvelope");
const TransactionCreateOrConnectWithoutBookingOrderInput_1 = require("../inputs/TransactionCreateOrConnectWithoutBookingOrderInput");
const TransactionCreateWithoutBookingOrderInput_1 = require("../inputs/TransactionCreateWithoutBookingOrderInput");
const TransactionScalarWhereInput_1 = require("../inputs/TransactionScalarWhereInput");
const TransactionUpdateManyWithWhereWithoutBookingOrderInput_1 = require("../inputs/TransactionUpdateManyWithWhereWithoutBookingOrderInput");
const TransactionUpdateWithWhereUniqueWithoutBookingOrderInput_1 = require("../inputs/TransactionUpdateWithWhereUniqueWithoutBookingOrderInput");
const TransactionUpsertWithWhereUniqueWithoutBookingOrderInput_1 = require("../inputs/TransactionUpsertWithWhereUniqueWithoutBookingOrderInput");
const TransactionWhereUniqueInput_1 = require("../inputs/TransactionWhereUniqueInput");
let TransactionUpdateManyWithoutBookingOrderInput = class TransactionUpdateManyWithoutBookingOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionCreateWithoutBookingOrderInput_1.TransactionCreateWithoutBookingOrderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutBookingOrderInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionCreateOrConnectWithoutBookingOrderInput_1.TransactionCreateOrConnectWithoutBookingOrderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutBookingOrderInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionUpsertWithWhereUniqueWithoutBookingOrderInput_1.TransactionUpsertWithWhereUniqueWithoutBookingOrderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutBookingOrderInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateManyBookingOrderInputEnvelope_1.TransactionCreateManyBookingOrderInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionCreateManyBookingOrderInputEnvelope_1.TransactionCreateManyBookingOrderInputEnvelope)
], TransactionUpdateManyWithoutBookingOrderInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereUniqueInput_1.TransactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutBookingOrderInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereUniqueInput_1.TransactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutBookingOrderInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereUniqueInput_1.TransactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutBookingOrderInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereUniqueInput_1.TransactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutBookingOrderInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionUpdateWithWhereUniqueWithoutBookingOrderInput_1.TransactionUpdateWithWhereUniqueWithoutBookingOrderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutBookingOrderInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionUpdateManyWithWhereWithoutBookingOrderInput_1.TransactionUpdateManyWithWhereWithoutBookingOrderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutBookingOrderInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionScalarWhereInput_1.TransactionScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutBookingOrderInput.prototype, "deleteMany", void 0);
TransactionUpdateManyWithoutBookingOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionUpdateManyWithoutBookingOrderInput", {
        isAbstract: true
    })
], TransactionUpdateManyWithoutBookingOrderInput);
exports.TransactionUpdateManyWithoutBookingOrderInput = TransactionUpdateManyWithoutBookingOrderInput;
