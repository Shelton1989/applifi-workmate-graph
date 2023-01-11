"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderUpdateManyWithWhereWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderScalarWhereInput_1 = require("../inputs/BookingOrderScalarWhereInput");
const BookingOrderUpdateManyMutationInput_1 = require("../inputs/BookingOrderUpdateManyMutationInput");
let BookingOrderUpdateManyWithWhereWithoutTenantInput = class BookingOrderUpdateManyWithWhereWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderScalarWhereInput_1.BookingOrderScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderScalarWhereInput_1.BookingOrderScalarWhereInput)
], BookingOrderUpdateManyWithWhereWithoutTenantInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderUpdateManyMutationInput_1.BookingOrderUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderUpdateManyMutationInput_1.BookingOrderUpdateManyMutationInput)
], BookingOrderUpdateManyWithWhereWithoutTenantInput.prototype, "data", void 0);
BookingOrderUpdateManyWithWhereWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderUpdateManyWithWhereWithoutTenantInput", {
        isAbstract: true
    })
], BookingOrderUpdateManyWithWhereWithoutTenantInput);
exports.BookingOrderUpdateManyWithWhereWithoutTenantInput = BookingOrderUpdateManyWithWhereWithoutTenantInput;
