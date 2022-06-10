"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateOneWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateOrConnectWithoutUserInput_1 = require("../inputs/OrderCreateOrConnectWithoutUserInput");
const OrderCreateWithoutUserInput_1 = require("../inputs/OrderCreateWithoutUserInput");
const OrderUpdateWithoutUserInput_1 = require("../inputs/OrderUpdateWithoutUserInput");
const OrderUpsertWithoutUserInput_1 = require("../inputs/OrderUpsertWithoutUserInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpdateOneWithoutUserInput = class OrderUpdateOneWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutUserInput_1.OrderCreateWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutUserInput_1.OrderCreateWithoutUserInput)
], OrderUpdateOneWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateOrConnectWithoutUserInput_1.OrderCreateOrConnectWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateOrConnectWithoutUserInput_1.OrderCreateOrConnectWithoutUserInput)
], OrderUpdateOneWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpsertWithoutUserInput_1.OrderUpsertWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderUpsertWithoutUserInput_1.OrderUpsertWithoutUserInput)
], OrderUpdateOneWithoutUserInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], OrderUpdateOneWithoutUserInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], OrderUpdateOneWithoutUserInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderUpdateOneWithoutUserInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateWithoutUserInput_1.OrderUpdateWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderUpdateWithoutUserInput_1.OrderUpdateWithoutUserInput)
], OrderUpdateOneWithoutUserInput.prototype, "update", void 0);
OrderUpdateOneWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateOneWithoutUserInput", {
        isAbstract: true
    })
], OrderUpdateOneWithoutUserInput);
exports.OrderUpdateOneWithoutUserInput = OrderUpdateOneWithoutUserInput;
