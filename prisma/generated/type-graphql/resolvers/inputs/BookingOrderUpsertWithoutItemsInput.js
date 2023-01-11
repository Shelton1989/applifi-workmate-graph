"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderUpsertWithoutItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderCreateWithoutItemsInput_1 = require("../inputs/BookingOrderCreateWithoutItemsInput");
const BookingOrderUpdateWithoutItemsInput_1 = require("../inputs/BookingOrderUpdateWithoutItemsInput");
let BookingOrderUpsertWithoutItemsInput = class BookingOrderUpsertWithoutItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderUpdateWithoutItemsInput_1.BookingOrderUpdateWithoutItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderUpdateWithoutItemsInput_1.BookingOrderUpdateWithoutItemsInput)
], BookingOrderUpsertWithoutItemsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCreateWithoutItemsInput_1.BookingOrderCreateWithoutItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderCreateWithoutItemsInput_1.BookingOrderCreateWithoutItemsInput)
], BookingOrderUpsertWithoutItemsInput.prototype, "create", void 0);
BookingOrderUpsertWithoutItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderUpsertWithoutItemsInput", {
        isAbstract: true
    })
], BookingOrderUpsertWithoutItemsInput);
exports.BookingOrderUpsertWithoutItemsInput = BookingOrderUpsertWithoutItemsInput;
