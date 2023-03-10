"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OrderLineItemWhereUniqueInput = class OrderLineItemWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemWhereUniqueInput.prototype, "id", void 0);
OrderLineItemWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemWhereUniqueInput", {
        isAbstract: true
    })
], OrderLineItemWhereUniqueInput);
exports.OrderLineItemWhereUniqueInput = OrderLineItemWhereUniqueInput;
