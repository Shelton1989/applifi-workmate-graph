"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpdateManyWithoutSelectedSizeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateManySelectedSizeInputEnvelope_1 = require("../inputs/OrderLineItemCreateManySelectedSizeInputEnvelope");
const OrderLineItemCreateOrConnectWithoutSelectedSizeInput_1 = require("../inputs/OrderLineItemCreateOrConnectWithoutSelectedSizeInput");
const OrderLineItemCreateWithoutSelectedSizeInput_1 = require("../inputs/OrderLineItemCreateWithoutSelectedSizeInput");
const OrderLineItemScalarWhereInput_1 = require("../inputs/OrderLineItemScalarWhereInput");
const OrderLineItemUpdateManyWithWhereWithoutSelectedSizeInput_1 = require("../inputs/OrderLineItemUpdateManyWithWhereWithoutSelectedSizeInput");
const OrderLineItemUpdateWithWhereUniqueWithoutSelectedSizeInput_1 = require("../inputs/OrderLineItemUpdateWithWhereUniqueWithoutSelectedSizeInput");
const OrderLineItemUpsertWithWhereUniqueWithoutSelectedSizeInput_1 = require("../inputs/OrderLineItemUpsertWithWhereUniqueWithoutSelectedSizeInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemUpdateManyWithoutSelectedSizeInput = class OrderLineItemUpdateManyWithoutSelectedSizeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateWithoutSelectedSizeInput_1.OrderLineItemCreateWithoutSelectedSizeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedSizeInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateOrConnectWithoutSelectedSizeInput_1.OrderLineItemCreateOrConnectWithoutSelectedSizeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedSizeInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemUpsertWithWhereUniqueWithoutSelectedSizeInput_1.OrderLineItemUpsertWithWhereUniqueWithoutSelectedSizeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedSizeInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateManySelectedSizeInputEnvelope_1.OrderLineItemCreateManySelectedSizeInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateManySelectedSizeInputEnvelope_1.OrderLineItemCreateManySelectedSizeInputEnvelope)
], OrderLineItemUpdateManyWithoutSelectedSizeInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedSizeInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedSizeInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedSizeInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedSizeInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemUpdateWithWhereUniqueWithoutSelectedSizeInput_1.OrderLineItemUpdateWithWhereUniqueWithoutSelectedSizeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedSizeInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemUpdateManyWithWhereWithoutSelectedSizeInput_1.OrderLineItemUpdateManyWithWhereWithoutSelectedSizeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedSizeInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemScalarWhereInput_1.OrderLineItemScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedSizeInput.prototype, "deleteMany", void 0);
OrderLineItemUpdateManyWithoutSelectedSizeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpdateManyWithoutSelectedSizeInput", {
        isAbstract: true
    })
], OrderLineItemUpdateManyWithoutSelectedSizeInput);
exports.OrderLineItemUpdateManyWithoutSelectedSizeInput = OrderLineItemUpdateManyWithoutSelectedSizeInput;
