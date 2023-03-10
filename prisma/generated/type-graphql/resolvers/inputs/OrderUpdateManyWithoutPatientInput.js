"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateManyWithoutPatientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManyPatientInputEnvelope_1 = require("../inputs/OrderCreateManyPatientInputEnvelope");
const OrderCreateOrConnectWithoutPatientInput_1 = require("../inputs/OrderCreateOrConnectWithoutPatientInput");
const OrderCreateWithoutPatientInput_1 = require("../inputs/OrderCreateWithoutPatientInput");
const OrderScalarWhereInput_1 = require("../inputs/OrderScalarWhereInput");
const OrderUpdateManyWithWhereWithoutPatientInput_1 = require("../inputs/OrderUpdateManyWithWhereWithoutPatientInput");
const OrderUpdateWithWhereUniqueWithoutPatientInput_1 = require("../inputs/OrderUpdateWithWhereUniqueWithoutPatientInput");
const OrderUpsertWithWhereUniqueWithoutPatientInput_1 = require("../inputs/OrderUpsertWithWhereUniqueWithoutPatientInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpdateManyWithoutPatientInput = class OrderUpdateManyWithoutPatientInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateWithoutPatientInput_1.OrderCreateWithoutPatientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutPatientInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutPatientInput_1.OrderCreateOrConnectWithoutPatientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutPatientInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpsertWithWhereUniqueWithoutPatientInput_1.OrderUpsertWithWhereUniqueWithoutPatientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutPatientInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateManyPatientInputEnvelope_1.OrderCreateManyPatientInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateManyPatientInputEnvelope_1.OrderCreateManyPatientInputEnvelope)
], OrderUpdateManyWithoutPatientInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutPatientInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutPatientInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutPatientInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutPatientInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpdateWithWhereUniqueWithoutPatientInput_1.OrderUpdateWithWhereUniqueWithoutPatientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutPatientInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpdateManyWithWhereWithoutPatientInput_1.OrderUpdateManyWithWhereWithoutPatientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutPatientInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderScalarWhereInput_1.OrderScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutPatientInput.prototype, "deleteMany", void 0);
OrderUpdateManyWithoutPatientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateManyWithoutPatientInput", {
        isAbstract: true
    })
], OrderUpdateManyWithoutPatientInput);
exports.OrderUpdateManyWithoutPatientInput = OrderUpdateManyWithoutPatientInput;
