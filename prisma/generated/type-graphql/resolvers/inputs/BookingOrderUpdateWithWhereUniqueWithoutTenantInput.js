"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderUpdateWithWhereUniqueWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderUpdateWithoutTenantInput_1 = require("../inputs/BookingOrderUpdateWithoutTenantInput");
const BookingOrderWhereUniqueInput_1 = require("../inputs/BookingOrderWhereUniqueInput");
let BookingOrderUpdateWithWhereUniqueWithoutTenantInput = class BookingOrderUpdateWithWhereUniqueWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput)
], BookingOrderUpdateWithWhereUniqueWithoutTenantInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderUpdateWithoutTenantInput_1.BookingOrderUpdateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderUpdateWithoutTenantInput_1.BookingOrderUpdateWithoutTenantInput)
], BookingOrderUpdateWithWhereUniqueWithoutTenantInput.prototype, "data", void 0);
BookingOrderUpdateWithWhereUniqueWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderUpdateWithWhereUniqueWithoutTenantInput", {
        isAbstract: true
    })
], BookingOrderUpdateWithWhereUniqueWithoutTenantInput);
exports.BookingOrderUpdateWithWhereUniqueWithoutTenantInput = BookingOrderUpdateWithWhereUniqueWithoutTenantInput;
