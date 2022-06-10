"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateManyWithoutSelectedShippingMethodInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManySelectedShippingMethodInputEnvelope_1 = require("../inputs/OrderCreateManySelectedShippingMethodInputEnvelope");
const OrderCreateOrConnectWithoutSelectedShippingMethodInput_1 = require("../inputs/OrderCreateOrConnectWithoutSelectedShippingMethodInput");
const OrderCreateWithoutSelectedShippingMethodInput_1 = require("../inputs/OrderCreateWithoutSelectedShippingMethodInput");
const OrderScalarWhereInput_1 = require("../inputs/OrderScalarWhereInput");
const OrderUpdateManyWithWhereWithoutSelectedShippingMethodInput_1 = require("../inputs/OrderUpdateManyWithWhereWithoutSelectedShippingMethodInput");
const OrderUpdateWithWhereUniqueWithoutSelectedShippingMethodInput_1 = require("../inputs/OrderUpdateWithWhereUniqueWithoutSelectedShippingMethodInput");
const OrderUpsertWithWhereUniqueWithoutSelectedShippingMethodInput_1 = require("../inputs/OrderUpsertWithWhereUniqueWithoutSelectedShippingMethodInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpdateManyWithoutSelectedShippingMethodInput = class OrderUpdateManyWithoutSelectedShippingMethodInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateWithoutSelectedShippingMethodInput_1.OrderCreateWithoutSelectedShippingMethodInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSelectedShippingMethodInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutSelectedShippingMethodInput_1.OrderCreateOrConnectWithoutSelectedShippingMethodInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSelectedShippingMethodInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpsertWithWhereUniqueWithoutSelectedShippingMethodInput_1.OrderUpsertWithWhereUniqueWithoutSelectedShippingMethodInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSelectedShippingMethodInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateManySelectedShippingMethodInputEnvelope_1.OrderCreateManySelectedShippingMethodInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateManySelectedShippingMethodInputEnvelope_1.OrderCreateManySelectedShippingMethodInputEnvelope)
], OrderUpdateManyWithoutSelectedShippingMethodInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSelectedShippingMethodInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSelectedShippingMethodInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSelectedShippingMethodInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSelectedShippingMethodInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpdateWithWhereUniqueWithoutSelectedShippingMethodInput_1.OrderUpdateWithWhereUniqueWithoutSelectedShippingMethodInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSelectedShippingMethodInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpdateManyWithWhereWithoutSelectedShippingMethodInput_1.OrderUpdateManyWithWhereWithoutSelectedShippingMethodInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSelectedShippingMethodInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderScalarWhereInput_1.OrderScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSelectedShippingMethodInput.prototype, "deleteMany", void 0);
OrderUpdateManyWithoutSelectedShippingMethodInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateManyWithoutSelectedShippingMethodInput", {
        isAbstract: true
    })
], OrderUpdateManyWithoutSelectedShippingMethodInput);
exports.OrderUpdateManyWithoutSelectedShippingMethodInput = OrderUpdateManyWithoutSelectedShippingMethodInput;
