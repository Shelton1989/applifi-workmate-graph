"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderUpdateManyWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderCreateManyTenantInputEnvelope_1 = require("../inputs/BookingOrderCreateManyTenantInputEnvelope");
const BookingOrderCreateOrConnectWithoutTenantInput_1 = require("../inputs/BookingOrderCreateOrConnectWithoutTenantInput");
const BookingOrderCreateWithoutTenantInput_1 = require("../inputs/BookingOrderCreateWithoutTenantInput");
const BookingOrderScalarWhereInput_1 = require("../inputs/BookingOrderScalarWhereInput");
const BookingOrderUpdateManyWithWhereWithoutTenantInput_1 = require("../inputs/BookingOrderUpdateManyWithWhereWithoutTenantInput");
const BookingOrderUpdateWithWhereUniqueWithoutTenantInput_1 = require("../inputs/BookingOrderUpdateWithWhereUniqueWithoutTenantInput");
const BookingOrderUpsertWithWhereUniqueWithoutTenantInput_1 = require("../inputs/BookingOrderUpsertWithWhereUniqueWithoutTenantInput");
const BookingOrderWhereUniqueInput_1 = require("../inputs/BookingOrderWhereUniqueInput");
let BookingOrderUpdateManyWithoutTenantInput = class BookingOrderUpdateManyWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderCreateWithoutTenantInput_1.BookingOrderCreateWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderUpdateManyWithoutTenantInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderCreateOrConnectWithoutTenantInput_1.BookingOrderCreateOrConnectWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderUpdateManyWithoutTenantInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderUpsertWithWhereUniqueWithoutTenantInput_1.BookingOrderUpsertWithWhereUniqueWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderUpdateManyWithoutTenantInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCreateManyTenantInputEnvelope_1.BookingOrderCreateManyTenantInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderCreateManyTenantInputEnvelope_1.BookingOrderCreateManyTenantInputEnvelope)
], BookingOrderUpdateManyWithoutTenantInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderUpdateManyWithoutTenantInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderUpdateManyWithoutTenantInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderUpdateManyWithoutTenantInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderUpdateManyWithoutTenantInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderUpdateWithWhereUniqueWithoutTenantInput_1.BookingOrderUpdateWithWhereUniqueWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderUpdateManyWithoutTenantInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderUpdateManyWithWhereWithoutTenantInput_1.BookingOrderUpdateManyWithWhereWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderUpdateManyWithoutTenantInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderScalarWhereInput_1.BookingOrderScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderUpdateManyWithoutTenantInput.prototype, "deleteMany", void 0);
BookingOrderUpdateManyWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderUpdateManyWithoutTenantInput", {
        isAbstract: true
    })
], BookingOrderUpdateManyWithoutTenantInput);
exports.BookingOrderUpdateManyWithoutTenantInput = BookingOrderUpdateManyWithoutTenantInput;
