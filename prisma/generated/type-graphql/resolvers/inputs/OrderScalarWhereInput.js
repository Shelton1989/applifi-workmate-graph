"use strict";
var OrderScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumORDER_STATUSFilter_1 = require("../inputs/EnumORDER_STATUSFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let OrderScalarWhereInput = OrderScalarWhereInput_1 = class OrderScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], OrderScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], OrderScalarWhereInput.prototype, "mealId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumORDER_STATUSFilter_1.EnumORDER_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumORDER_STATUSFilter_1.EnumORDER_STATUSFilter)
], OrderScalarWhereInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], OrderScalarWhereInput.prototype, "patientId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], OrderScalarWhereInput.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], OrderScalarWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], OrderScalarWhereInput.prototype, "updatedAt", void 0);
OrderScalarWhereInput = OrderScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderScalarWhereInput", {
        isAbstract: true
    })
], OrderScalarWhereInput);
exports.OrderScalarWhereInput = OrderScalarWhereInput;
