"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderCreateOrConnectWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderCreateWithoutTenantInput_1 = require("../inputs/BookingOrderCreateWithoutTenantInput");
const BookingOrderWhereUniqueInput_1 = require("../inputs/BookingOrderWhereUniqueInput");
let BookingOrderCreateOrConnectWithoutTenantInput = class BookingOrderCreateOrConnectWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput)
], BookingOrderCreateOrConnectWithoutTenantInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCreateWithoutTenantInput_1.BookingOrderCreateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderCreateWithoutTenantInput_1.BookingOrderCreateWithoutTenantInput)
], BookingOrderCreateOrConnectWithoutTenantInput.prototype, "create", void 0);
BookingOrderCreateOrConnectWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderCreateOrConnectWithoutTenantInput", {
        isAbstract: true
    })
], BookingOrderCreateOrConnectWithoutTenantInput);
exports.BookingOrderCreateOrConnectWithoutTenantInput = BookingOrderCreateOrConnectWithoutTenantInput;
