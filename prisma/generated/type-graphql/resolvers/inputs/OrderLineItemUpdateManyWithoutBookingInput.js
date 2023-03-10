"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpdateManyWithoutBookingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateManyBookingInputEnvelope_1 = require("../inputs/OrderLineItemCreateManyBookingInputEnvelope");
const OrderLineItemCreateOrConnectWithoutBookingInput_1 = require("../inputs/OrderLineItemCreateOrConnectWithoutBookingInput");
const OrderLineItemCreateWithoutBookingInput_1 = require("../inputs/OrderLineItemCreateWithoutBookingInput");
const OrderLineItemScalarWhereInput_1 = require("../inputs/OrderLineItemScalarWhereInput");
const OrderLineItemUpdateManyWithWhereWithoutBookingInput_1 = require("../inputs/OrderLineItemUpdateManyWithWhereWithoutBookingInput");
const OrderLineItemUpdateWithWhereUniqueWithoutBookingInput_1 = require("../inputs/OrderLineItemUpdateWithWhereUniqueWithoutBookingInput");
const OrderLineItemUpsertWithWhereUniqueWithoutBookingInput_1 = require("../inputs/OrderLineItemUpsertWithWhereUniqueWithoutBookingInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemUpdateManyWithoutBookingInput = class OrderLineItemUpdateManyWithoutBookingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateWithoutBookingInput_1.OrderLineItemCreateWithoutBookingInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutBookingInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateOrConnectWithoutBookingInput_1.OrderLineItemCreateOrConnectWithoutBookingInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutBookingInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemUpsertWithWhereUniqueWithoutBookingInput_1.OrderLineItemUpsertWithWhereUniqueWithoutBookingInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutBookingInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateManyBookingInputEnvelope_1.OrderLineItemCreateManyBookingInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateManyBookingInputEnvelope_1.OrderLineItemCreateManyBookingInputEnvelope)
], OrderLineItemUpdateManyWithoutBookingInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutBookingInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutBookingInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutBookingInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutBookingInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemUpdateWithWhereUniqueWithoutBookingInput_1.OrderLineItemUpdateWithWhereUniqueWithoutBookingInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutBookingInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemUpdateManyWithWhereWithoutBookingInput_1.OrderLineItemUpdateManyWithWhereWithoutBookingInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutBookingInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemScalarWhereInput_1.OrderLineItemScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutBookingInput.prototype, "deleteMany", void 0);
OrderLineItemUpdateManyWithoutBookingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpdateManyWithoutBookingInput", {
        isAbstract: true
    })
], OrderLineItemUpdateManyWithoutBookingInput);
exports.OrderLineItemUpdateManyWithoutBookingInput = OrderLineItemUpdateManyWithoutBookingInput;
