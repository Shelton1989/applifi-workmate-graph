"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantBookingOrdersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderOrderByWithRelationInput_1 = require("../../../inputs/BookingOrderOrderByWithRelationInput");
const BookingOrderWhereInput_1 = require("../../../inputs/BookingOrderWhereInput");
const BookingOrderWhereUniqueInput_1 = require("../../../inputs/BookingOrderWhereUniqueInput");
const BookingOrderScalarFieldEnum_1 = require("../../../../enums/BookingOrderScalarFieldEnum");
let TenantBookingOrdersArgs = class TenantBookingOrdersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderWhereInput_1.BookingOrderWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderWhereInput_1.BookingOrderWhereInput)
], TenantBookingOrdersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderOrderByWithRelationInput_1.BookingOrderOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TenantBookingOrdersArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput)
], TenantBookingOrdersArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TenantBookingOrdersArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TenantBookingOrdersArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderScalarFieldEnum_1.BookingOrderScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TenantBookingOrdersArgs.prototype, "distinct", void 0);
TenantBookingOrdersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], TenantBookingOrdersArgs);
exports.TenantBookingOrdersArgs = TenantBookingOrdersArgs;
