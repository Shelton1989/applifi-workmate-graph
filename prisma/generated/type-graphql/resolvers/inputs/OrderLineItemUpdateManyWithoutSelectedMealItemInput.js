"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpdateManyWithoutSelectedMealItemInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateManySelectedMealItemInputEnvelope_1 = require("../inputs/OrderLineItemCreateManySelectedMealItemInputEnvelope");
const OrderLineItemCreateOrConnectWithoutSelectedMealItemInput_1 = require("../inputs/OrderLineItemCreateOrConnectWithoutSelectedMealItemInput");
const OrderLineItemCreateWithoutSelectedMealItemInput_1 = require("../inputs/OrderLineItemCreateWithoutSelectedMealItemInput");
const OrderLineItemScalarWhereInput_1 = require("../inputs/OrderLineItemScalarWhereInput");
const OrderLineItemUpdateManyWithWhereWithoutSelectedMealItemInput_1 = require("../inputs/OrderLineItemUpdateManyWithWhereWithoutSelectedMealItemInput");
const OrderLineItemUpdateWithWhereUniqueWithoutSelectedMealItemInput_1 = require("../inputs/OrderLineItemUpdateWithWhereUniqueWithoutSelectedMealItemInput");
const OrderLineItemUpsertWithWhereUniqueWithoutSelectedMealItemInput_1 = require("../inputs/OrderLineItemUpsertWithWhereUniqueWithoutSelectedMealItemInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemUpdateManyWithoutSelectedMealItemInput = class OrderLineItemUpdateManyWithoutSelectedMealItemInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateWithoutSelectedMealItemInput_1.OrderLineItemCreateWithoutSelectedMealItemInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedMealItemInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateOrConnectWithoutSelectedMealItemInput_1.OrderLineItemCreateOrConnectWithoutSelectedMealItemInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedMealItemInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemUpsertWithWhereUniqueWithoutSelectedMealItemInput_1.OrderLineItemUpsertWithWhereUniqueWithoutSelectedMealItemInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedMealItemInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateManySelectedMealItemInputEnvelope_1.OrderLineItemCreateManySelectedMealItemInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateManySelectedMealItemInputEnvelope_1.OrderLineItemCreateManySelectedMealItemInputEnvelope)
], OrderLineItemUpdateManyWithoutSelectedMealItemInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedMealItemInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedMealItemInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedMealItemInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedMealItemInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemUpdateWithWhereUniqueWithoutSelectedMealItemInput_1.OrderLineItemUpdateWithWhereUniqueWithoutSelectedMealItemInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedMealItemInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemUpdateManyWithWhereWithoutSelectedMealItemInput_1.OrderLineItemUpdateManyWithWhereWithoutSelectedMealItemInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedMealItemInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemScalarWhereInput_1.OrderLineItemScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedMealItemInput.prototype, "deleteMany", void 0);
OrderLineItemUpdateManyWithoutSelectedMealItemInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpdateManyWithoutSelectedMealItemInput", {
        isAbstract: true
    })
], OrderLineItemUpdateManyWithoutSelectedMealItemInput);
exports.OrderLineItemUpdateManyWithoutSelectedMealItemInput = OrderLineItemUpdateManyWithoutSelectedMealItemInput;
