"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpdateManyWithoutLineItemPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateManyLineItemPriceInputEnvelope_1 = require("../inputs/OrderLineItemCreateManyLineItemPriceInputEnvelope");
const OrderLineItemCreateOrConnectWithoutLineItemPriceInput_1 = require("../inputs/OrderLineItemCreateOrConnectWithoutLineItemPriceInput");
const OrderLineItemCreateWithoutLineItemPriceInput_1 = require("../inputs/OrderLineItemCreateWithoutLineItemPriceInput");
const OrderLineItemScalarWhereInput_1 = require("../inputs/OrderLineItemScalarWhereInput");
const OrderLineItemUpdateManyWithWhereWithoutLineItemPriceInput_1 = require("../inputs/OrderLineItemUpdateManyWithWhereWithoutLineItemPriceInput");
const OrderLineItemUpdateWithWhereUniqueWithoutLineItemPriceInput_1 = require("../inputs/OrderLineItemUpdateWithWhereUniqueWithoutLineItemPriceInput");
const OrderLineItemUpsertWithWhereUniqueWithoutLineItemPriceInput_1 = require("../inputs/OrderLineItemUpsertWithWhereUniqueWithoutLineItemPriceInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemUpdateManyWithoutLineItemPriceInput = class OrderLineItemUpdateManyWithoutLineItemPriceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateWithoutLineItemPriceInput_1.OrderLineItemCreateWithoutLineItemPriceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutLineItemPriceInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateOrConnectWithoutLineItemPriceInput_1.OrderLineItemCreateOrConnectWithoutLineItemPriceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutLineItemPriceInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemUpsertWithWhereUniqueWithoutLineItemPriceInput_1.OrderLineItemUpsertWithWhereUniqueWithoutLineItemPriceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutLineItemPriceInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateManyLineItemPriceInputEnvelope_1.OrderLineItemCreateManyLineItemPriceInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateManyLineItemPriceInputEnvelope_1.OrderLineItemCreateManyLineItemPriceInputEnvelope)
], OrderLineItemUpdateManyWithoutLineItemPriceInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutLineItemPriceInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutLineItemPriceInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutLineItemPriceInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutLineItemPriceInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemUpdateWithWhereUniqueWithoutLineItemPriceInput_1.OrderLineItemUpdateWithWhereUniqueWithoutLineItemPriceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutLineItemPriceInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemUpdateManyWithWhereWithoutLineItemPriceInput_1.OrderLineItemUpdateManyWithWhereWithoutLineItemPriceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutLineItemPriceInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemScalarWhereInput_1.OrderLineItemScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutLineItemPriceInput.prototype, "deleteMany", void 0);
OrderLineItemUpdateManyWithoutLineItemPriceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpdateManyWithoutLineItemPriceInput", {
        isAbstract: true
    })
], OrderLineItemUpdateManyWithoutLineItemPriceInput);
exports.OrderLineItemUpdateManyWithoutLineItemPriceInput = OrderLineItemUpdateManyWithoutLineItemPriceInput;
