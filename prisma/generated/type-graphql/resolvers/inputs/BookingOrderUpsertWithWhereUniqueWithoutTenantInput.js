"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderUpsertWithWhereUniqueWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderCreateWithoutTenantInput_1 = require("../inputs/BookingOrderCreateWithoutTenantInput");
const BookingOrderUpdateWithoutTenantInput_1 = require("../inputs/BookingOrderUpdateWithoutTenantInput");
const BookingOrderWhereUniqueInput_1 = require("../inputs/BookingOrderWhereUniqueInput");
let BookingOrderUpsertWithWhereUniqueWithoutTenantInput = class BookingOrderUpsertWithWhereUniqueWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput)
], BookingOrderUpsertWithWhereUniqueWithoutTenantInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderUpdateWithoutTenantInput_1.BookingOrderUpdateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderUpdateWithoutTenantInput_1.BookingOrderUpdateWithoutTenantInput)
], BookingOrderUpsertWithWhereUniqueWithoutTenantInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCreateWithoutTenantInput_1.BookingOrderCreateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderCreateWithoutTenantInput_1.BookingOrderCreateWithoutTenantInput)
], BookingOrderUpsertWithWhereUniqueWithoutTenantInput.prototype, "create", void 0);
BookingOrderUpsertWithWhereUniqueWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderUpsertWithWhereUniqueWithoutTenantInput", {
        isAbstract: true
    })
], BookingOrderUpsertWithWhereUniqueWithoutTenantInput);
exports.BookingOrderUpsertWithWhereUniqueWithoutTenantInput = BookingOrderUpsertWithWhereUniqueWithoutTenantInput;
