"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpsertWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateWithoutUserInput_1 = require("../inputs/OrderCreateWithoutUserInput");
const OrderUpdateWithoutUserInput_1 = require("../inputs/OrderUpdateWithoutUserInput");
let OrderUpsertWithoutUserInput = class OrderUpsertWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateWithoutUserInput_1.OrderUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderUpdateWithoutUserInput_1.OrderUpdateWithoutUserInput)
], OrderUpsertWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutUserInput_1.OrderCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutUserInput_1.OrderCreateWithoutUserInput)
], OrderUpsertWithoutUserInput.prototype, "create", void 0);
OrderUpsertWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpsertWithoutUserInput", {
        isAbstract: true
    })
], OrderUpsertWithoutUserInput);
exports.OrderUpsertWithoutUserInput = OrderUpsertWithoutUserInput;
