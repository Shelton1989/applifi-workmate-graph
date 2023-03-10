"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateManySelectedMealItemOptionInputEnvelope_1 = require("../inputs/OrderLineItemCreateManySelectedMealItemOptionInputEnvelope");
const OrderLineItemCreateOrConnectWithoutSelectedMealItemOptionInput_1 = require("../inputs/OrderLineItemCreateOrConnectWithoutSelectedMealItemOptionInput");
const OrderLineItemCreateWithoutSelectedMealItemOptionInput_1 = require("../inputs/OrderLineItemCreateWithoutSelectedMealItemOptionInput");
const OrderLineItemScalarWhereInput_1 = require("../inputs/OrderLineItemScalarWhereInput");
const OrderLineItemUpdateManyWithWhereWithoutSelectedMealItemOptionInput_1 = require("../inputs/OrderLineItemUpdateManyWithWhereWithoutSelectedMealItemOptionInput");
const OrderLineItemUpdateWithWhereUniqueWithoutSelectedMealItemOptionInput_1 = require("../inputs/OrderLineItemUpdateWithWhereUniqueWithoutSelectedMealItemOptionInput");
const OrderLineItemUpsertWithWhereUniqueWithoutSelectedMealItemOptionInput_1 = require("../inputs/OrderLineItemUpsertWithWhereUniqueWithoutSelectedMealItemOptionInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput = class OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateWithoutSelectedMealItemOptionInput_1.OrderLineItemCreateWithoutSelectedMealItemOptionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateOrConnectWithoutSelectedMealItemOptionInput_1.OrderLineItemCreateOrConnectWithoutSelectedMealItemOptionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemUpsertWithWhereUniqueWithoutSelectedMealItemOptionInput_1.OrderLineItemUpsertWithWhereUniqueWithoutSelectedMealItemOptionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateManySelectedMealItemOptionInputEnvelope_1.OrderLineItemCreateManySelectedMealItemOptionInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateManySelectedMealItemOptionInputEnvelope_1.OrderLineItemCreateManySelectedMealItemOptionInputEnvelope)
], OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemUpdateWithWhereUniqueWithoutSelectedMealItemOptionInput_1.OrderLineItemUpdateWithWhereUniqueWithoutSelectedMealItemOptionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemUpdateManyWithWhereWithoutSelectedMealItemOptionInput_1.OrderLineItemUpdateManyWithWhereWithoutSelectedMealItemOptionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemScalarWhereInput_1.OrderLineItemScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput.prototype, "deleteMany", void 0);
OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput", {
        isAbstract: true
    })
], OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput);
exports.OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput = OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput;
