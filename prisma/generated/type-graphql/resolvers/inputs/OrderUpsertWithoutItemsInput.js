"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpsertWithoutItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateWithoutItemsInput_1 = require("../inputs/OrderCreateWithoutItemsInput");
const OrderUpdateWithoutItemsInput_1 = require("../inputs/OrderUpdateWithoutItemsInput");
let OrderUpsertWithoutItemsInput = class OrderUpsertWithoutItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateWithoutItemsInput_1.OrderUpdateWithoutItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderUpdateWithoutItemsInput_1.OrderUpdateWithoutItemsInput)
], OrderUpsertWithoutItemsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutItemsInput_1.OrderCreateWithoutItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutItemsInput_1.OrderCreateWithoutItemsInput)
], OrderUpsertWithoutItemsInput.prototype, "create", void 0);
OrderUpsertWithoutItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpsertWithoutItemsInput", {
        isAbstract: true
    })
], OrderUpsertWithoutItemsInput);
exports.OrderUpsertWithoutItemsInput = OrderUpsertWithoutItemsInput;
