"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateManyWithoutSellerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManySellerInputEnvelope_1 = require("../inputs/OrderCreateManySellerInputEnvelope");
const OrderCreateOrConnectWithoutSellerInput_1 = require("../inputs/OrderCreateOrConnectWithoutSellerInput");
const OrderCreateWithoutSellerInput_1 = require("../inputs/OrderCreateWithoutSellerInput");
const OrderScalarWhereInput_1 = require("../inputs/OrderScalarWhereInput");
const OrderUpdateManyWithWhereWithoutSellerInput_1 = require("../inputs/OrderUpdateManyWithWhereWithoutSellerInput");
const OrderUpdateWithWhereUniqueWithoutSellerInput_1 = require("../inputs/OrderUpdateWithWhereUniqueWithoutSellerInput");
const OrderUpsertWithWhereUniqueWithoutSellerInput_1 = require("../inputs/OrderUpsertWithWhereUniqueWithoutSellerInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpdateManyWithoutSellerInput = class OrderUpdateManyWithoutSellerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateWithoutSellerInput_1.OrderCreateWithoutSellerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSellerInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutSellerInput_1.OrderCreateOrConnectWithoutSellerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSellerInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpsertWithWhereUniqueWithoutSellerInput_1.OrderUpsertWithWhereUniqueWithoutSellerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSellerInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateManySellerInputEnvelope_1.OrderCreateManySellerInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateManySellerInputEnvelope_1.OrderCreateManySellerInputEnvelope)
], OrderUpdateManyWithoutSellerInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSellerInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSellerInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSellerInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSellerInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpdateWithWhereUniqueWithoutSellerInput_1.OrderUpdateWithWhereUniqueWithoutSellerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSellerInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpdateManyWithWhereWithoutSellerInput_1.OrderUpdateManyWithWhereWithoutSellerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSellerInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderScalarWhereInput_1.OrderScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSellerInput.prototype, "deleteMany", void 0);
OrderUpdateManyWithoutSellerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateManyWithoutSellerInput", {
        isAbstract: true
    })
], OrderUpdateManyWithoutSellerInput);
exports.OrderUpdateManyWithoutSellerInput = OrderUpdateManyWithoutSellerInput;
