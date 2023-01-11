"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderCreateNestedOneWithoutItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderCreateOrConnectWithoutItemsInput_1 = require("../inputs/BookingOrderCreateOrConnectWithoutItemsInput");
const BookingOrderCreateWithoutItemsInput_1 = require("../inputs/BookingOrderCreateWithoutItemsInput");
const BookingOrderWhereUniqueInput_1 = require("../inputs/BookingOrderWhereUniqueInput");
let BookingOrderCreateNestedOneWithoutItemsInput = class BookingOrderCreateNestedOneWithoutItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCreateWithoutItemsInput_1.BookingOrderCreateWithoutItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderCreateWithoutItemsInput_1.BookingOrderCreateWithoutItemsInput)
], BookingOrderCreateNestedOneWithoutItemsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCreateOrConnectWithoutItemsInput_1.BookingOrderCreateOrConnectWithoutItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderCreateOrConnectWithoutItemsInput_1.BookingOrderCreateOrConnectWithoutItemsInput)
], BookingOrderCreateNestedOneWithoutItemsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput)
], BookingOrderCreateNestedOneWithoutItemsInput.prototype, "connect", void 0);
BookingOrderCreateNestedOneWithoutItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderCreateNestedOneWithoutItemsInput", {
        isAbstract: true
    })
], BookingOrderCreateNestedOneWithoutItemsInput);
exports.BookingOrderCreateNestedOneWithoutItemsInput = BookingOrderCreateNestedOneWithoutItemsInput;
