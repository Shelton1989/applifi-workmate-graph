"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpdateManyWithoutSelectedArtworkInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateManySelectedArtworkInputEnvelope_1 = require("../inputs/OrderLineItemCreateManySelectedArtworkInputEnvelope");
const OrderLineItemCreateOrConnectWithoutSelectedArtworkInput_1 = require("../inputs/OrderLineItemCreateOrConnectWithoutSelectedArtworkInput");
const OrderLineItemCreateWithoutSelectedArtworkInput_1 = require("../inputs/OrderLineItemCreateWithoutSelectedArtworkInput");
const OrderLineItemScalarWhereInput_1 = require("../inputs/OrderLineItemScalarWhereInput");
const OrderLineItemUpdateManyWithWhereWithoutSelectedArtworkInput_1 = require("../inputs/OrderLineItemUpdateManyWithWhereWithoutSelectedArtworkInput");
const OrderLineItemUpdateWithWhereUniqueWithoutSelectedArtworkInput_1 = require("../inputs/OrderLineItemUpdateWithWhereUniqueWithoutSelectedArtworkInput");
const OrderLineItemUpsertWithWhereUniqueWithoutSelectedArtworkInput_1 = require("../inputs/OrderLineItemUpsertWithWhereUniqueWithoutSelectedArtworkInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemUpdateManyWithoutSelectedArtworkInput = class OrderLineItemUpdateManyWithoutSelectedArtworkInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateWithoutSelectedArtworkInput_1.OrderLineItemCreateWithoutSelectedArtworkInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedArtworkInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateOrConnectWithoutSelectedArtworkInput_1.OrderLineItemCreateOrConnectWithoutSelectedArtworkInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedArtworkInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemUpsertWithWhereUniqueWithoutSelectedArtworkInput_1.OrderLineItemUpsertWithWhereUniqueWithoutSelectedArtworkInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedArtworkInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateManySelectedArtworkInputEnvelope_1.OrderLineItemCreateManySelectedArtworkInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateManySelectedArtworkInputEnvelope_1.OrderLineItemCreateManySelectedArtworkInputEnvelope)
], OrderLineItemUpdateManyWithoutSelectedArtworkInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedArtworkInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedArtworkInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedArtworkInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedArtworkInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemUpdateWithWhereUniqueWithoutSelectedArtworkInput_1.OrderLineItemUpdateWithWhereUniqueWithoutSelectedArtworkInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedArtworkInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemUpdateManyWithWhereWithoutSelectedArtworkInput_1.OrderLineItemUpdateManyWithWhereWithoutSelectedArtworkInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedArtworkInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemScalarWhereInput_1.OrderLineItemScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemUpdateManyWithoutSelectedArtworkInput.prototype, "deleteMany", void 0);
OrderLineItemUpdateManyWithoutSelectedArtworkInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpdateManyWithoutSelectedArtworkInput", {
        isAbstract: true
    })
], OrderLineItemUpdateManyWithoutSelectedArtworkInput);
exports.OrderLineItemUpdateManyWithoutSelectedArtworkInput = OrderLineItemUpdateManyWithoutSelectedArtworkInput;
