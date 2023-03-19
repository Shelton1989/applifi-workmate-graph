"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OrderLineItemMinAggregate = class OrderLineItemMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemMinAggregate.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemMinAggregate.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemMinAggregate.prototype, "mealItemId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemMinAggregate.prototype, "mealItemOptionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemMinAggregate.prototype, "orderId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderLineItemMinAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderLineItemMinAggregate.prototype, "updatedAt", void 0);
OrderLineItemMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OrderLineItemMinAggregate", {
        isAbstract: true
    })
], OrderLineItemMinAggregate);
exports.OrderLineItemMinAggregate = OrderLineItemMinAggregate;
