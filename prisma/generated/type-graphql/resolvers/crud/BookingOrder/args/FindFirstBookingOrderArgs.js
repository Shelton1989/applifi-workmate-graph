"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstBookingOrderArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderOrderByWithRelationInput_1 = require("../../../inputs/BookingOrderOrderByWithRelationInput");
const BookingOrderWhereInput_1 = require("../../../inputs/BookingOrderWhereInput");
const BookingOrderWhereUniqueInput_1 = require("../../../inputs/BookingOrderWhereUniqueInput");
const BookingOrderScalarFieldEnum_1 = require("../../../../enums/BookingOrderScalarFieldEnum");
let FindFirstBookingOrderArgs = class FindFirstBookingOrderArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderWhereInput_1.BookingOrderWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderWhereInput_1.BookingOrderWhereInput)
], FindFirstBookingOrderArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderOrderByWithRelationInput_1.BookingOrderOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstBookingOrderArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput)
], FindFirstBookingOrderArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstBookingOrderArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstBookingOrderArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderScalarFieldEnum_1.BookingOrderScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstBookingOrderArgs.prototype, "distinct", void 0);
FindFirstBookingOrderArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstBookingOrderArgs);
exports.FindFirstBookingOrderArgs = FindFirstBookingOrderArgs;
