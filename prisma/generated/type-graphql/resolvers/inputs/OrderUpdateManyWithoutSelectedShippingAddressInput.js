"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateManyWithoutSelectedShippingAddressInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManySelectedShippingAddressInputEnvelope_1 = require("../inputs/OrderCreateManySelectedShippingAddressInputEnvelope");
const OrderCreateOrConnectWithoutSelectedShippingAddressInput_1 = require("../inputs/OrderCreateOrConnectWithoutSelectedShippingAddressInput");
const OrderCreateWithoutSelectedShippingAddressInput_1 = require("../inputs/OrderCreateWithoutSelectedShippingAddressInput");
const OrderScalarWhereInput_1 = require("../inputs/OrderScalarWhereInput");
const OrderUpdateManyWithWhereWithoutSelectedShippingAddressInput_1 = require("../inputs/OrderUpdateManyWithWhereWithoutSelectedShippingAddressInput");
const OrderUpdateWithWhereUniqueWithoutSelectedShippingAddressInput_1 = require("../inputs/OrderUpdateWithWhereUniqueWithoutSelectedShippingAddressInput");
const OrderUpsertWithWhereUniqueWithoutSelectedShippingAddressInput_1 = require("../inputs/OrderUpsertWithWhereUniqueWithoutSelectedShippingAddressInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpdateManyWithoutSelectedShippingAddressInput = class OrderUpdateManyWithoutSelectedShippingAddressInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateWithoutSelectedShippingAddressInput_1.OrderCreateWithoutSelectedShippingAddressInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSelectedShippingAddressInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutSelectedShippingAddressInput_1.OrderCreateOrConnectWithoutSelectedShippingAddressInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSelectedShippingAddressInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpsertWithWhereUniqueWithoutSelectedShippingAddressInput_1.OrderUpsertWithWhereUniqueWithoutSelectedShippingAddressInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSelectedShippingAddressInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateManySelectedShippingAddressInputEnvelope_1.OrderCreateManySelectedShippingAddressInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateManySelectedShippingAddressInputEnvelope_1.OrderCreateManySelectedShippingAddressInputEnvelope)
], OrderUpdateManyWithoutSelectedShippingAddressInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSelectedShippingAddressInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSelectedShippingAddressInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSelectedShippingAddressInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSelectedShippingAddressInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpdateWithWhereUniqueWithoutSelectedShippingAddressInput_1.OrderUpdateWithWhereUniqueWithoutSelectedShippingAddressInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSelectedShippingAddressInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderUpdateManyWithWhereWithoutSelectedShippingAddressInput_1.OrderUpdateManyWithWhereWithoutSelectedShippingAddressInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSelectedShippingAddressInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderScalarWhereInput_1.OrderScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderUpdateManyWithoutSelectedShippingAddressInput.prototype, "deleteMany", void 0);
OrderUpdateManyWithoutSelectedShippingAddressInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateManyWithoutSelectedShippingAddressInput", {
        isAbstract: true
    })
], OrderUpdateManyWithoutSelectedShippingAddressInput);
exports.OrderUpdateManyWithoutSelectedShippingAddressInput = OrderUpdateManyWithoutSelectedShippingAddressInput;
