"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderUpdateOneRequiredWithoutItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderCreateOrConnectWithoutItemsInput_1 = require("../inputs/BookingOrderCreateOrConnectWithoutItemsInput");
const BookingOrderCreateWithoutItemsInput_1 = require("../inputs/BookingOrderCreateWithoutItemsInput");
const BookingOrderUpdateWithoutItemsInput_1 = require("../inputs/BookingOrderUpdateWithoutItemsInput");
const BookingOrderUpsertWithoutItemsInput_1 = require("../inputs/BookingOrderUpsertWithoutItemsInput");
const BookingOrderWhereUniqueInput_1 = require("../inputs/BookingOrderWhereUniqueInput");
let BookingOrderUpdateOneRequiredWithoutItemsInput = class BookingOrderUpdateOneRequiredWithoutItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCreateWithoutItemsInput_1.BookingOrderCreateWithoutItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderCreateWithoutItemsInput_1.BookingOrderCreateWithoutItemsInput)
], BookingOrderUpdateOneRequiredWithoutItemsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCreateOrConnectWithoutItemsInput_1.BookingOrderCreateOrConnectWithoutItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderCreateOrConnectWithoutItemsInput_1.BookingOrderCreateOrConnectWithoutItemsInput)
], BookingOrderUpdateOneRequiredWithoutItemsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderUpsertWithoutItemsInput_1.BookingOrderUpsertWithoutItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderUpsertWithoutItemsInput_1.BookingOrderUpsertWithoutItemsInput)
], BookingOrderUpdateOneRequiredWithoutItemsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput)
], BookingOrderUpdateOneRequiredWithoutItemsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderUpdateWithoutItemsInput_1.BookingOrderUpdateWithoutItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderUpdateWithoutItemsInput_1.BookingOrderUpdateWithoutItemsInput)
], BookingOrderUpdateOneRequiredWithoutItemsInput.prototype, "update", void 0);
BookingOrderUpdateOneRequiredWithoutItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderUpdateOneRequiredWithoutItemsInput", {
        isAbstract: true
    })
], BookingOrderUpdateOneRequiredWithoutItemsInput);
exports.BookingOrderUpdateOneRequiredWithoutItemsInput = BookingOrderUpdateOneRequiredWithoutItemsInput;
