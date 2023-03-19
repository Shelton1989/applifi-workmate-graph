"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpdateManyWithoutOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateManyOrderInputEnvelope_1 = require("../inputs/OrderLineItemCreateManyOrderInputEnvelope");
const OrderLineItemCreateOrConnectWithoutOrderInput_1 = require("../inputs/OrderLineItemCreateOrConnectWithoutOrderInput");
const OrderLineItemCreateWithoutOrderInput_1 = require("../inputs/OrderLineItemCreateWithoutOrderInput");
const OrderLineItemScalarWhereInput_1 = require("../inputs/OrderLineItemScalarWhereInput");
const OrderLineItemUpdateManyWithWhereWithoutOrderInput_1 = require("../inputs/OrderLineItemUpdateManyWithWhereWithoutOrderInput");
const OrderLineItemUpdateWithWhereUniqueWithoutOrderInput_1 = require("../inputs/OrderLineItemUpdateWithWhereUniqueWithoutOrderInput");
const OrderLineItemUpsertWithWhereUniqueWithoutOrderInput_1 = require("../inputs/OrderLineItemUpsertWithWhereUniqueWithoutOrderInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemUpdateManyWithoutOrderInput = class OrderLineItemUpdateManyWithoutOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateWithoutOrderInput_1.OrderLineItemCreateWithoutOrderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutOrderInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateOrConnectWithoutOrderInput_1.OrderLineItemCreateOrConnectWithoutOrderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutOrderInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemUpsertWithWhereUniqueWithoutOrderInput_1.OrderLineItemUpsertWithWhereUniqueWithoutOrderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutOrderInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateManyOrderInputEnvelope_1.OrderLineItemCreateManyOrderInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateManyOrderInputEnvelope_1.OrderLineItemCreateManyOrderInputEnvelope)
], OrderLineItemUpdateManyWithoutOrderInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutOrderInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutOrderInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutOrderInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutOrderInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemUpdateWithWhereUniqueWithoutOrderInput_1.OrderLineItemUpdateWithWhereUniqueWithoutOrderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutOrderInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemUpdateManyWithWhereWithoutOrderInput_1.OrderLineItemUpdateManyWithWhereWithoutOrderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutOrderInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemScalarWhereInput_1.OrderLineItemScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutOrderInput.prototype, "deleteMany", void 0);
OrderLineItemUpdateManyWithoutOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpdateManyWithoutOrderInput", {
        isAbstract: true
    })
], OrderLineItemUpdateManyWithoutOrderInput);
exports.OrderLineItemUpdateManyWithoutOrderInput = OrderLineItemUpdateManyWithoutOrderInput;
