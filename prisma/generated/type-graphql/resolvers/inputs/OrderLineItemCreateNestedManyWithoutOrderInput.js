"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateNestedManyWithoutOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateManyOrderInputEnvelope_1 = require("../inputs/OrderLineItemCreateManyOrderInputEnvelope");
const OrderLineItemCreateOrConnectWithoutOrderInput_1 = require("../inputs/OrderLineItemCreateOrConnectWithoutOrderInput");
const OrderLineItemCreateWithoutOrderInput_1 = require("../inputs/OrderLineItemCreateWithoutOrderInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemCreateNestedManyWithoutOrderInput = class OrderLineItemCreateNestedManyWithoutOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateWithoutOrderInput_1.OrderLineItemCreateWithoutOrderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemCreateNestedManyWithoutOrderInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateOrConnectWithoutOrderInput_1.OrderLineItemCreateOrConnectWithoutOrderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemCreateNestedManyWithoutOrderInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateManyOrderInputEnvelope_1.OrderLineItemCreateManyOrderInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateManyOrderInputEnvelope_1.OrderLineItemCreateManyOrderInputEnvelope)
], OrderLineItemCreateNestedManyWithoutOrderInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemCreateNestedManyWithoutOrderInput.prototype, "connect", void 0);
OrderLineItemCreateNestedManyWithoutOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateNestedManyWithoutOrderInput", {
        isAbstract: true
    })
], OrderLineItemCreateNestedManyWithoutOrderInput);
exports.OrderLineItemCreateNestedManyWithoutOrderInput = OrderLineItemCreateNestedManyWithoutOrderInput;
