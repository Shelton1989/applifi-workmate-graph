"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpdateManyWithoutSelectedColorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateManySelectedColorInputEnvelope_1 = require("../inputs/OrderLineItemCreateManySelectedColorInputEnvelope");
const OrderLineItemCreateOrConnectWithoutSelectedColorInput_1 = require("../inputs/OrderLineItemCreateOrConnectWithoutSelectedColorInput");
const OrderLineItemCreateWithoutSelectedColorInput_1 = require("../inputs/OrderLineItemCreateWithoutSelectedColorInput");
const OrderLineItemScalarWhereInput_1 = require("../inputs/OrderLineItemScalarWhereInput");
const OrderLineItemUpdateManyWithWhereWithoutSelectedColorInput_1 = require("../inputs/OrderLineItemUpdateManyWithWhereWithoutSelectedColorInput");
const OrderLineItemUpdateWithWhereUniqueWithoutSelectedColorInput_1 = require("../inputs/OrderLineItemUpdateWithWhereUniqueWithoutSelectedColorInput");
const OrderLineItemUpsertWithWhereUniqueWithoutSelectedColorInput_1 = require("../inputs/OrderLineItemUpsertWithWhereUniqueWithoutSelectedColorInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemUpdateManyWithoutSelectedColorInput = class OrderLineItemUpdateManyWithoutSelectedColorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateWithoutSelectedColorInput_1.OrderLineItemCreateWithoutSelectedColorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedColorInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateOrConnectWithoutSelectedColorInput_1.OrderLineItemCreateOrConnectWithoutSelectedColorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedColorInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemUpsertWithWhereUniqueWithoutSelectedColorInput_1.OrderLineItemUpsertWithWhereUniqueWithoutSelectedColorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedColorInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateManySelectedColorInputEnvelope_1.OrderLineItemCreateManySelectedColorInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateManySelectedColorInputEnvelope_1.OrderLineItemCreateManySelectedColorInputEnvelope)
], OrderLineItemUpdateManyWithoutSelectedColorInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedColorInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedColorInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedColorInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedColorInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemUpdateWithWhereUniqueWithoutSelectedColorInput_1.OrderLineItemUpdateWithWhereUniqueWithoutSelectedColorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedColorInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemUpdateManyWithWhereWithoutSelectedColorInput_1.OrderLineItemUpdateManyWithWhereWithoutSelectedColorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedColorInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemScalarWhereInput_1.OrderLineItemScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedColorInput.prototype, "deleteMany", void 0);
OrderLineItemUpdateManyWithoutSelectedColorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpdateManyWithoutSelectedColorInput", {
        isAbstract: true
    })
], OrderLineItemUpdateManyWithoutSelectedColorInput);
exports.OrderLineItemUpdateManyWithoutSelectedColorInput = OrderLineItemUpdateManyWithoutSelectedColorInput;
