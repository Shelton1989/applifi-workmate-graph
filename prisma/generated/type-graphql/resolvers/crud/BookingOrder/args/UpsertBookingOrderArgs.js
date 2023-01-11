"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertBookingOrderArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderCreateInput_1 = require("../../../inputs/BookingOrderCreateInput");
const BookingOrderUpdateInput_1 = require("../../../inputs/BookingOrderUpdateInput");
const BookingOrderWhereUniqueInput_1 = require("../../../inputs/BookingOrderWhereUniqueInput");
let UpsertBookingOrderArgs = class UpsertBookingOrderArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput)
], UpsertBookingOrderArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCreateInput_1.BookingOrderCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderCreateInput_1.BookingOrderCreateInput)
], UpsertBookingOrderArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderUpdateInput_1.BookingOrderUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderUpdateInput_1.BookingOrderUpdateInput)
], UpsertBookingOrderArgs.prototype, "update", void 0);
UpsertBookingOrderArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertBookingOrderArgs);
exports.UpsertBookingOrderArgs = UpsertBookingOrderArgs;
