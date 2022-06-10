"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateNestedManyWithoutSelectedProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateManySelectedProductInputEnvelope_1 = require("../inputs/OrderLineItemCreateManySelectedProductInputEnvelope");
const OrderLineItemCreateOrConnectWithoutSelectedProductInput_1 = require("../inputs/OrderLineItemCreateOrConnectWithoutSelectedProductInput");
const OrderLineItemCreateWithoutSelectedProductInput_1 = require("../inputs/OrderLineItemCreateWithoutSelectedProductInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemCreateNestedManyWithoutSelectedProductInput = class OrderLineItemCreateNestedManyWithoutSelectedProductInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateWithoutSelectedProductInput_1.OrderLineItemCreateWithoutSelectedProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemCreateNestedManyWithoutSelectedProductInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateOrConnectWithoutSelectedProductInput_1.OrderLineItemCreateOrConnectWithoutSelectedProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemCreateNestedManyWithoutSelectedProductInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateManySelectedProductInputEnvelope_1.OrderLineItemCreateManySelectedProductInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateManySelectedProductInputEnvelope_1.OrderLineItemCreateManySelectedProductInputEnvelope)
], OrderLineItemCreateNestedManyWithoutSelectedProductInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemCreateNestedManyWithoutSelectedProductInput.prototype, "connect", void 0);
OrderLineItemCreateNestedManyWithoutSelectedProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateNestedManyWithoutSelectedProductInput", {
        isAbstract: true
    })
], OrderLineItemCreateNestedManyWithoutSelectedProductInput);
exports.OrderLineItemCreateNestedManyWithoutSelectedProductInput = OrderLineItemCreateNestedManyWithoutSelectedProductInput;
