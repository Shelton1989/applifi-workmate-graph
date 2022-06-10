"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateNestedManyWithoutLineItemPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateManyLineItemPriceInputEnvelope_1 = require("../inputs/OrderLineItemCreateManyLineItemPriceInputEnvelope");
const OrderLineItemCreateOrConnectWithoutLineItemPriceInput_1 = require("../inputs/OrderLineItemCreateOrConnectWithoutLineItemPriceInput");
const OrderLineItemCreateWithoutLineItemPriceInput_1 = require("../inputs/OrderLineItemCreateWithoutLineItemPriceInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemCreateNestedManyWithoutLineItemPriceInput = class OrderLineItemCreateNestedManyWithoutLineItemPriceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateWithoutLineItemPriceInput_1.OrderLineItemCreateWithoutLineItemPriceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemCreateNestedManyWithoutLineItemPriceInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateOrConnectWithoutLineItemPriceInput_1.OrderLineItemCreateOrConnectWithoutLineItemPriceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemCreateNestedManyWithoutLineItemPriceInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateManyLineItemPriceInputEnvelope_1.OrderLineItemCreateManyLineItemPriceInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateManyLineItemPriceInputEnvelope_1.OrderLineItemCreateManyLineItemPriceInputEnvelope)
], OrderLineItemCreateNestedManyWithoutLineItemPriceInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemCreateNestedManyWithoutLineItemPriceInput.prototype, "connect", void 0);
OrderLineItemCreateNestedManyWithoutLineItemPriceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateNestedManyWithoutLineItemPriceInput", {
        isAbstract: true
    })
], OrderLineItemCreateNestedManyWithoutLineItemPriceInput);
exports.OrderLineItemCreateNestedManyWithoutLineItemPriceInput = OrderLineItemCreateNestedManyWithoutLineItemPriceInput;
