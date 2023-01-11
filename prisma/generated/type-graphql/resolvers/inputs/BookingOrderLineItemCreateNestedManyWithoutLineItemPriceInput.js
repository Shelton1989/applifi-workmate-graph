"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemCreateManyLineItemPriceInputEnvelope_1 = require("../inputs/BookingOrderLineItemCreateManyLineItemPriceInputEnvelope");
const BookingOrderLineItemCreateOrConnectWithoutLineItemPriceInput_1 = require("../inputs/BookingOrderLineItemCreateOrConnectWithoutLineItemPriceInput");
const BookingOrderLineItemCreateWithoutLineItemPriceInput_1 = require("../inputs/BookingOrderLineItemCreateWithoutLineItemPriceInput");
const BookingOrderLineItemWhereUniqueInput_1 = require("../inputs/BookingOrderLineItemWhereUniqueInput");
let BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput = class BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderLineItemCreateWithoutLineItemPriceInput_1.BookingOrderLineItemCreateWithoutLineItemPriceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderLineItemCreateOrConnectWithoutLineItemPriceInput_1.BookingOrderLineItemCreateOrConnectWithoutLineItemPriceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemCreateManyLineItemPriceInputEnvelope_1.BookingOrderLineItemCreateManyLineItemPriceInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemCreateManyLineItemPriceInputEnvelope_1.BookingOrderLineItemCreateManyLineItemPriceInputEnvelope)
], BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderLineItemWhereUniqueInput_1.BookingOrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput.prototype, "connect", void 0);
BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput", {
        isAbstract: true
    })
], BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput);
exports.BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput = BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput;
