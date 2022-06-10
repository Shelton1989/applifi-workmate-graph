"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateNestedManyWithoutSelectedColorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateManySelectedColorInputEnvelope_1 = require("../inputs/OrderLineItemCreateManySelectedColorInputEnvelope");
const OrderLineItemCreateOrConnectWithoutSelectedColorInput_1 = require("../inputs/OrderLineItemCreateOrConnectWithoutSelectedColorInput");
const OrderLineItemCreateWithoutSelectedColorInput_1 = require("../inputs/OrderLineItemCreateWithoutSelectedColorInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemCreateNestedManyWithoutSelectedColorInput = class OrderLineItemCreateNestedManyWithoutSelectedColorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateWithoutSelectedColorInput_1.OrderLineItemCreateWithoutSelectedColorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemCreateNestedManyWithoutSelectedColorInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateOrConnectWithoutSelectedColorInput_1.OrderLineItemCreateOrConnectWithoutSelectedColorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemCreateNestedManyWithoutSelectedColorInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateManySelectedColorInputEnvelope_1.OrderLineItemCreateManySelectedColorInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateManySelectedColorInputEnvelope_1.OrderLineItemCreateManySelectedColorInputEnvelope)
], OrderLineItemCreateNestedManyWithoutSelectedColorInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemCreateNestedManyWithoutSelectedColorInput.prototype, "connect", void 0);
OrderLineItemCreateNestedManyWithoutSelectedColorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateNestedManyWithoutSelectedColorInput", {
        isAbstract: true
    })
], OrderLineItemCreateNestedManyWithoutSelectedColorInput);
exports.OrderLineItemCreateNestedManyWithoutSelectedColorInput = OrderLineItemCreateNestedManyWithoutSelectedColorInput;
