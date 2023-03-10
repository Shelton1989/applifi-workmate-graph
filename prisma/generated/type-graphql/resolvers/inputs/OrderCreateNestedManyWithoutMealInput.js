"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateNestedManyWithoutMealInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManyMealInputEnvelope_1 = require("../inputs/OrderCreateManyMealInputEnvelope");
const OrderCreateOrConnectWithoutMealInput_1 = require("../inputs/OrderCreateOrConnectWithoutMealInput");
const OrderCreateWithoutMealInput_1 = require("../inputs/OrderCreateWithoutMealInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderCreateNestedManyWithoutMealInput = class OrderCreateNestedManyWithoutMealInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateWithoutMealInput_1.OrderCreateWithoutMealInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutMealInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutMealInput_1.OrderCreateOrConnectWithoutMealInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutMealInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateManyMealInputEnvelope_1.OrderCreateManyMealInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateManyMealInputEnvelope_1.OrderCreateManyMealInputEnvelope)
], OrderCreateNestedManyWithoutMealInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutMealInput.prototype, "connect", void 0);
OrderCreateNestedManyWithoutMealInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateNestedManyWithoutMealInput", {
        isAbstract: true
    })
], OrderCreateNestedManyWithoutMealInput);
exports.OrderCreateNestedManyWithoutMealInput = OrderCreateNestedManyWithoutMealInput;
