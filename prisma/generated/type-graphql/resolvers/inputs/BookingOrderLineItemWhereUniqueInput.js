"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BookingOrderLineItemWhereUniqueInput = class BookingOrderLineItemWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemWhereUniqueInput.prototype, "id", void 0);
BookingOrderLineItemWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderLineItemWhereUniqueInput", {
        isAbstract: true
    })
], BookingOrderLineItemWhereUniqueInput);
exports.BookingOrderLineItemWhereUniqueInput = BookingOrderLineItemWhereUniqueInput;
