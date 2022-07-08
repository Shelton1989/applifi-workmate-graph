"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateNestedManyWithoutBuyerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManyBuyerInputEnvelope_1 = require("../inputs/OrderCreateManyBuyerInputEnvelope");
const OrderCreateOrConnectWithoutBuyerInput_1 = require("../inputs/OrderCreateOrConnectWithoutBuyerInput");
const OrderCreateWithoutBuyerInput_1 = require("../inputs/OrderCreateWithoutBuyerInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderCreateNestedManyWithoutBuyerInput = class OrderCreateNestedManyWithoutBuyerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateWithoutBuyerInput_1.OrderCreateWithoutBuyerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutBuyerInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutBuyerInput_1.OrderCreateOrConnectWithoutBuyerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutBuyerInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateManyBuyerInputEnvelope_1.OrderCreateManyBuyerInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateManyBuyerInputEnvelope_1.OrderCreateManyBuyerInputEnvelope)
], OrderCreateNestedManyWithoutBuyerInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutBuyerInput.prototype, "connect", void 0);
OrderCreateNestedManyWithoutBuyerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateNestedManyWithoutBuyerInput", {
        isAbstract: true
    })
], OrderCreateNestedManyWithoutBuyerInput);
exports.OrderCreateNestedManyWithoutBuyerInput = OrderCreateNestedManyWithoutBuyerInput;
