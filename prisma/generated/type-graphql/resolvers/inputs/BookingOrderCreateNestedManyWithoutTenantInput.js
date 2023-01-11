"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderCreateNestedManyWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderCreateManyTenantInputEnvelope_1 = require("../inputs/BookingOrderCreateManyTenantInputEnvelope");
const BookingOrderCreateOrConnectWithoutTenantInput_1 = require("../inputs/BookingOrderCreateOrConnectWithoutTenantInput");
const BookingOrderCreateWithoutTenantInput_1 = require("../inputs/BookingOrderCreateWithoutTenantInput");
const BookingOrderWhereUniqueInput_1 = require("../inputs/BookingOrderWhereUniqueInput");
let BookingOrderCreateNestedManyWithoutTenantInput = class BookingOrderCreateNestedManyWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderCreateWithoutTenantInput_1.BookingOrderCreateWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderCreateNestedManyWithoutTenantInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderCreateOrConnectWithoutTenantInput_1.BookingOrderCreateOrConnectWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderCreateNestedManyWithoutTenantInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCreateManyTenantInputEnvelope_1.BookingOrderCreateManyTenantInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderCreateManyTenantInputEnvelope_1.BookingOrderCreateManyTenantInputEnvelope)
], BookingOrderCreateNestedManyWithoutTenantInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderCreateNestedManyWithoutTenantInput.prototype, "connect", void 0);
BookingOrderCreateNestedManyWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderCreateNestedManyWithoutTenantInput", {
        isAbstract: true
    })
], BookingOrderCreateNestedManyWithoutTenantInput);
exports.BookingOrderCreateNestedManyWithoutTenantInput = BookingOrderCreateNestedManyWithoutTenantInput;
