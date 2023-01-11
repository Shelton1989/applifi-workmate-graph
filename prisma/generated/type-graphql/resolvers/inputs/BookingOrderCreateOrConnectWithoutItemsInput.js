"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderCreateOrConnectWithoutItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderCreateWithoutItemsInput_1 = require("../inputs/BookingOrderCreateWithoutItemsInput");
const BookingOrderWhereUniqueInput_1 = require("../inputs/BookingOrderWhereUniqueInput");
let BookingOrderCreateOrConnectWithoutItemsInput = class BookingOrderCreateOrConnectWithoutItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput)
], BookingOrderCreateOrConnectWithoutItemsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCreateWithoutItemsInput_1.BookingOrderCreateWithoutItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderCreateWithoutItemsInput_1.BookingOrderCreateWithoutItemsInput)
], BookingOrderCreateOrConnectWithoutItemsInput.prototype, "create", void 0);
BookingOrderCreateOrConnectWithoutItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderCreateOrConnectWithoutItemsInput", {
        isAbstract: true
    })
], BookingOrderCreateOrConnectWithoutItemsInput);
exports.BookingOrderCreateOrConnectWithoutItemsInput = BookingOrderCreateOrConnectWithoutItemsInput;
