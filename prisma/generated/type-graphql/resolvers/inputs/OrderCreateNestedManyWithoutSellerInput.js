"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateNestedManyWithoutSellerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManySellerInputEnvelope_1 = require("../inputs/OrderCreateManySellerInputEnvelope");
const OrderCreateOrConnectWithoutSellerInput_1 = require("../inputs/OrderCreateOrConnectWithoutSellerInput");
const OrderCreateWithoutSellerInput_1 = require("../inputs/OrderCreateWithoutSellerInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderCreateNestedManyWithoutSellerInput = class OrderCreateNestedManyWithoutSellerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateWithoutSellerInput_1.OrderCreateWithoutSellerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutSellerInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutSellerInput_1.OrderCreateOrConnectWithoutSellerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutSellerInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateManySellerInputEnvelope_1.OrderCreateManySellerInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateManySellerInputEnvelope_1.OrderCreateManySellerInputEnvelope)
], OrderCreateNestedManyWithoutSellerInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutSellerInput.prototype, "connect", void 0);
OrderCreateNestedManyWithoutSellerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateNestedManyWithoutSellerInput", {
        isAbstract: true
    })
], OrderCreateNestedManyWithoutSellerInput);
exports.OrderCreateNestedManyWithoutSellerInput = OrderCreateNestedManyWithoutSellerInput;
