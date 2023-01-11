"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderItemsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemOrderByWithRelationInput_1 = require("../../../inputs/BookingOrderLineItemOrderByWithRelationInput");
const BookingOrderLineItemWhereInput_1 = require("../../../inputs/BookingOrderLineItemWhereInput");
const BookingOrderLineItemWhereUniqueInput_1 = require("../../../inputs/BookingOrderLineItemWhereUniqueInput");
const BookingOrderLineItemScalarFieldEnum_1 = require("../../../../enums/BookingOrderLineItemScalarFieldEnum");
let BookingOrderItemsArgs = class BookingOrderItemsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemWhereInput_1.BookingOrderLineItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemWhereInput_1.BookingOrderLineItemWhereInput)
], BookingOrderItemsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderLineItemOrderByWithRelationInput_1.BookingOrderLineItemOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderItemsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemWhereUniqueInput_1.BookingOrderLineItemWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemWhereUniqueInput_1.BookingOrderLineItemWhereUniqueInput)
], BookingOrderItemsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], BookingOrderItemsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], BookingOrderItemsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderLineItemScalarFieldEnum_1.BookingOrderLineItemScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderItemsArgs.prototype, "distinct", void 0);
BookingOrderItemsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], BookingOrderItemsArgs);
exports.BookingOrderItemsArgs = BookingOrderItemsArgs;
