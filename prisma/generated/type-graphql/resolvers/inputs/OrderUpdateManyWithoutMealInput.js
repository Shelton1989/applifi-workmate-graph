"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateManyWithoutMealInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManyMealInputEnvelope_1 = require("../inputs/OrderCreateManyMealInputEnvelope");
const OrderCreateOrConnectWithoutMealInput_1 = require("../inputs/OrderCreateOrConnectWithoutMealInput");
const OrderCreateWithoutMealInput_1 = require("../inputs/OrderCreateWithoutMealInput");
const OrderScalarWhereInput_1 = require("../inputs/OrderScalarWhereInput");
const OrderUpdateManyWithWhereWithoutMealInput_1 = require("../inputs/OrderUpdateManyWithWhereWithoutMealInput");
const OrderUpdateWithWhereUniqueWithoutMealInput_1 = require("../inputs/OrderUpdateWithWhereUniqueWithoutMealInput");
const OrderUpsertWithWhereUniqueWithoutMealInput_1 = require("../inputs/OrderUpsertWithWhereUniqueWithoutMealInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpdateManyWithoutMealInput = class OrderUpdateManyWithoutMealInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateWithoutMealInput_1.OrderCreateWithoutMealInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutMealInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutMealInput_1.OrderCreateOrConnectWithoutMealInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutMealInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpsertWithWhereUniqueWithoutMealInput_1.OrderUpsertWithWhereUniqueWithoutMealInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutMealInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateManyMealInputEnvelope_1.OrderCreateManyMealInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateManyMealInputEnvelope_1.OrderCreateManyMealInputEnvelope)
], OrderUpdateManyWithoutMealInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutMealInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutMealInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutMealInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutMealInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpdateWithWhereUniqueWithoutMealInput_1.OrderUpdateWithWhereUniqueWithoutMealInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutMealInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpdateManyWithWhereWithoutMealInput_1.OrderUpdateManyWithWhereWithoutMealInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutMealInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderScalarWhereInput_1.OrderScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutMealInput.prototype, "deleteMany", void 0);
OrderUpdateManyWithoutMealInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateManyWithoutMealInput", {
        isAbstract: true
    })
], OrderUpdateManyWithoutMealInput);
exports.OrderUpdateManyWithoutMealInput = OrderUpdateManyWithoutMealInput;
