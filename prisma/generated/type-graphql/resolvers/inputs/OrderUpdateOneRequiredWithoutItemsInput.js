"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateOneRequiredWithoutItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateOrConnectWithoutItemsInput_1 = require("../inputs/OrderCreateOrConnectWithoutItemsInput");
const OrderCreateWithoutItemsInput_1 = require("../inputs/OrderCreateWithoutItemsInput");
const OrderUpdateWithoutItemsInput_1 = require("../inputs/OrderUpdateWithoutItemsInput");
const OrderUpsertWithoutItemsInput_1 = require("../inputs/OrderUpsertWithoutItemsInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpdateOneRequiredWithoutItemsInput = class OrderUpdateOneRequiredWithoutItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutItemsInput_1.OrderCreateWithoutItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutItemsInput_1.OrderCreateWithoutItemsInput)
], OrderUpdateOneRequiredWithoutItemsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateOrConnectWithoutItemsInput_1.OrderCreateOrConnectWithoutItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateOrConnectWithoutItemsInput_1.OrderCreateOrConnectWithoutItemsInput)
], OrderUpdateOneRequiredWithoutItemsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpsertWithoutItemsInput_1.OrderUpsertWithoutItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderUpsertWithoutItemsInput_1.OrderUpsertWithoutItemsInput)
], OrderUpdateOneRequiredWithoutItemsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderUpdateOneRequiredWithoutItemsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateWithoutItemsInput_1.OrderUpdateWithoutItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderUpdateWithoutItemsInput_1.OrderUpdateWithoutItemsInput)
], OrderUpdateOneRequiredWithoutItemsInput.prototype, "update", void 0);
OrderUpdateOneRequiredWithoutItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateOneRequiredWithoutItemsInput", {
        isAbstract: true
    })
], OrderUpdateOneRequiredWithoutItemsInput);
exports.OrderUpdateOneRequiredWithoutItemsInput = OrderUpdateOneRequiredWithoutItemsInput;
