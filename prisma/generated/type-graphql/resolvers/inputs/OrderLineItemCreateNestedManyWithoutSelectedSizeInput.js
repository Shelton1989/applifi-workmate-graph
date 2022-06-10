"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateNestedManyWithoutSelectedSizeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateManySelectedSizeInputEnvelope_1 = require("../inputs/OrderLineItemCreateManySelectedSizeInputEnvelope");
const OrderLineItemCreateOrConnectWithoutSelectedSizeInput_1 = require("../inputs/OrderLineItemCreateOrConnectWithoutSelectedSizeInput");
const OrderLineItemCreateWithoutSelectedSizeInput_1 = require("../inputs/OrderLineItemCreateWithoutSelectedSizeInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemCreateNestedManyWithoutSelectedSizeInput = class OrderLineItemCreateNestedManyWithoutSelectedSizeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateWithoutSelectedSizeInput_1.OrderLineItemCreateWithoutSelectedSizeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemCreateNestedManyWithoutSelectedSizeInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateOrConnectWithoutSelectedSizeInput_1.OrderLineItemCreateOrConnectWithoutSelectedSizeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemCreateNestedManyWithoutSelectedSizeInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateManySelectedSizeInputEnvelope_1.OrderLineItemCreateManySelectedSizeInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateManySelectedSizeInputEnvelope_1.OrderLineItemCreateManySelectedSizeInputEnvelope)
], OrderLineItemCreateNestedManyWithoutSelectedSizeInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemCreateNestedManyWithoutSelectedSizeInput.prototype, "connect", void 0);
OrderLineItemCreateNestedManyWithoutSelectedSizeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateNestedManyWithoutSelectedSizeInput", {
        isAbstract: true
    })
], OrderLineItemCreateNestedManyWithoutSelectedSizeInput);
exports.OrderLineItemCreateNestedManyWithoutSelectedSizeInput = OrderLineItemCreateNestedManyWithoutSelectedSizeInput;
