"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BookingOrderWhereUniqueInput = class BookingOrderWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderWhereUniqueInput.prototype, "id", void 0);
BookingOrderWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderWhereUniqueInput", {
        isAbstract: true
    })
], BookingOrderWhereUniqueInput);
exports.BookingOrderWhereUniqueInput = BookingOrderWhereUniqueInput;
