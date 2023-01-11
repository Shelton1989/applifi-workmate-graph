"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderUpdateManyWithWhereWithoutBuyerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderScalarWhereInput_1 = require("../inputs/BookingOrderScalarWhereInput");
const BookingOrderUpdateManyMutationInput_1 = require("../inputs/BookingOrderUpdateManyMutationInput");
let BookingOrderUpdateManyWithWhereWithoutBuyerInput = class BookingOrderUpdateManyWithWhereWithoutBuyerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderScalarWhereInput_1.BookingOrderScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderScalarWhereInput_1.BookingOrderScalarWhereInput)
], BookingOrderUpdateManyWithWhereWithoutBuyerInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderUpdateManyMutationInput_1.BookingOrderUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderUpdateManyMutationInput_1.BookingOrderUpdateManyMutationInput)
], BookingOrderUpdateManyWithWhereWithoutBuyerInput.prototype, "data", void 0);
BookingOrderUpdateManyWithWhereWithoutBuyerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderUpdateManyWithWhereWithoutBuyerInput", {
        isAbstract: true
    })
], BookingOrderUpdateManyWithWhereWithoutBuyerInput);
exports.BookingOrderUpdateManyWithWhereWithoutBuyerInput = BookingOrderUpdateManyWithWhereWithoutBuyerInput;
