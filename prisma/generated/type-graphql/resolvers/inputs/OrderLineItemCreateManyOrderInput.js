"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateManyOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OrderLineItemCreateManyOrderInput = class OrderLineItemCreateManyOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemCreateManyOrderInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemCreateManyOrderInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemCreateManyOrderInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemCreateManyOrderInput.prototype, "mealItemId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemCreateManyOrderInput.prototype, "mealItemOptionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderLineItemCreateManyOrderInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderLineItemCreateManyOrderInput.prototype, "updatedAt", void 0);
OrderLineItemCreateManyOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateManyOrderInput", {
        isAbstract: true
    })
], OrderLineItemCreateManyOrderInput);
exports.OrderLineItemCreateManyOrderInput = OrderLineItemCreateManyOrderInput;