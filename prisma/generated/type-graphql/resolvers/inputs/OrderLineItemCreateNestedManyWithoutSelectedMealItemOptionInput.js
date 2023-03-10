"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateNestedManyWithoutSelectedMealItemOptionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateManySelectedMealItemOptionInputEnvelope_1 = require("../inputs/OrderLineItemCreateManySelectedMealItemOptionInputEnvelope");
const OrderLineItemCreateOrConnectWithoutSelectedMealItemOptionInput_1 = require("../inputs/OrderLineItemCreateOrConnectWithoutSelectedMealItemOptionInput");
const OrderLineItemCreateWithoutSelectedMealItemOptionInput_1 = require("../inputs/OrderLineItemCreateWithoutSelectedMealItemOptionInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemCreateNestedManyWithoutSelectedMealItemOptionInput = class OrderLineItemCreateNestedManyWithoutSelectedMealItemOptionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateWithoutSelectedMealItemOptionInput_1.OrderLineItemCreateWithoutSelectedMealItemOptionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemCreateNestedManyWithoutSelectedMealItemOptionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateOrConnectWithoutSelectedMealItemOptionInput_1.OrderLineItemCreateOrConnectWithoutSelectedMealItemOptionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemCreateNestedManyWithoutSelectedMealItemOptionInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateManySelectedMealItemOptionInputEnvelope_1.OrderLineItemCreateManySelectedMealItemOptionInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateManySelectedMealItemOptionInputEnvelope_1.OrderLineItemCreateManySelectedMealItemOptionInputEnvelope)
], OrderLineItemCreateNestedManyWithoutSelectedMealItemOptionInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemCreateNestedManyWithoutSelectedMealItemOptionInput.prototype, "connect", void 0);
OrderLineItemCreateNestedManyWithoutSelectedMealItemOptionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateNestedManyWithoutSelectedMealItemOptionInput", {
        isAbstract: true
    })
], OrderLineItemCreateNestedManyWithoutSelectedMealItemOptionInput);
exports.OrderLineItemCreateNestedManyWithoutSelectedMealItemOptionInput = OrderLineItemCreateNestedManyWithoutSelectedMealItemOptionInput;
