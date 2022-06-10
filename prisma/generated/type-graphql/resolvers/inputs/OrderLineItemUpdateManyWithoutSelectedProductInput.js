"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpdateManyWithoutSelectedProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateManySelectedProductInputEnvelope_1 = require("../inputs/OrderLineItemCreateManySelectedProductInputEnvelope");
const OrderLineItemCreateOrConnectWithoutSelectedProductInput_1 = require("../inputs/OrderLineItemCreateOrConnectWithoutSelectedProductInput");
const OrderLineItemCreateWithoutSelectedProductInput_1 = require("../inputs/OrderLineItemCreateWithoutSelectedProductInput");
const OrderLineItemScalarWhereInput_1 = require("../inputs/OrderLineItemScalarWhereInput");
const OrderLineItemUpdateManyWithWhereWithoutSelectedProductInput_1 = require("../inputs/OrderLineItemUpdateManyWithWhereWithoutSelectedProductInput");
const OrderLineItemUpdateWithWhereUniqueWithoutSelectedProductInput_1 = require("../inputs/OrderLineItemUpdateWithWhereUniqueWithoutSelectedProductInput");
const OrderLineItemUpsertWithWhereUniqueWithoutSelectedProductInput_1 = require("../inputs/OrderLineItemUpsertWithWhereUniqueWithoutSelectedProductInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemUpdateManyWithoutSelectedProductInput = class OrderLineItemUpdateManyWithoutSelectedProductInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateWithoutSelectedProductInput_1.OrderLineItemCreateWithoutSelectedProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedProductInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateOrConnectWithoutSelectedProductInput_1.OrderLineItemCreateOrConnectWithoutSelectedProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedProductInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemUpsertWithWhereUniqueWithoutSelectedProductInput_1.OrderLineItemUpsertWithWhereUniqueWithoutSelectedProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedProductInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateManySelectedProductInputEnvelope_1.OrderLineItemCreateManySelectedProductInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateManySelectedProductInputEnvelope_1.OrderLineItemCreateManySelectedProductInputEnvelope)
], OrderLineItemUpdateManyWithoutSelectedProductInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedProductInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedProductInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedProductInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedProductInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemUpdateWithWhereUniqueWithoutSelectedProductInput_1.OrderLineItemUpdateWithWhereUniqueWithoutSelectedProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedProductInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemUpdateManyWithWhereWithoutSelectedProductInput_1.OrderLineItemUpdateManyWithWhereWithoutSelectedProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedProductInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemScalarWhereInput_1.OrderLineItemScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedProductInput.prototype, "deleteMany", void 0);
OrderLineItemUpdateManyWithoutSelectedProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpdateManyWithoutSelectedProductInput", {
        isAbstract: true
    })
], OrderLineItemUpdateManyWithoutSelectedProductInput);
exports.OrderLineItemUpdateManyWithoutSelectedProductInput = OrderLineItemUpdateManyWithoutSelectedProductInput;
