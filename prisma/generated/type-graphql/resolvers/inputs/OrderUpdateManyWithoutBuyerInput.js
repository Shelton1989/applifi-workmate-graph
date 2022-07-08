"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateManyWithoutBuyerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManyBuyerInputEnvelope_1 = require("../inputs/OrderCreateManyBuyerInputEnvelope");
const OrderCreateOrConnectWithoutBuyerInput_1 = require("../inputs/OrderCreateOrConnectWithoutBuyerInput");
const OrderCreateWithoutBuyerInput_1 = require("../inputs/OrderCreateWithoutBuyerInput");
const OrderScalarWhereInput_1 = require("../inputs/OrderScalarWhereInput");
const OrderUpdateManyWithWhereWithoutBuyerInput_1 = require("../inputs/OrderUpdateManyWithWhereWithoutBuyerInput");
const OrderUpdateWithWhereUniqueWithoutBuyerInput_1 = require("../inputs/OrderUpdateWithWhereUniqueWithoutBuyerInput");
const OrderUpsertWithWhereUniqueWithoutBuyerInput_1 = require("../inputs/OrderUpsertWithWhereUniqueWithoutBuyerInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpdateManyWithoutBuyerInput = class OrderUpdateManyWithoutBuyerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateWithoutBuyerInput_1.OrderCreateWithoutBuyerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutBuyerInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutBuyerInput_1.OrderCreateOrConnectWithoutBuyerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutBuyerInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpsertWithWhereUniqueWithoutBuyerInput_1.OrderUpsertWithWhereUniqueWithoutBuyerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutBuyerInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateManyBuyerInputEnvelope_1.OrderCreateManyBuyerInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateManyBuyerInputEnvelope_1.OrderCreateManyBuyerInputEnvelope)
], OrderUpdateManyWithoutBuyerInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutBuyerInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutBuyerInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutBuyerInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutBuyerInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpdateWithWhereUniqueWithoutBuyerInput_1.OrderUpdateWithWhereUniqueWithoutBuyerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutBuyerInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpdateManyWithWhereWithoutBuyerInput_1.OrderUpdateManyWithWhereWithoutBuyerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutBuyerInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderScalarWhereInput_1.OrderScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutBuyerInput.prototype, "deleteMany", void 0);
OrderUpdateManyWithoutBuyerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateManyWithoutBuyerInput", {
        isAbstract: true
    })
], OrderUpdateManyWithoutBuyerInput);
exports.OrderUpdateManyWithoutBuyerInput = OrderUpdateManyWithoutBuyerInput;
