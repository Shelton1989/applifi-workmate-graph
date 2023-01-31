"use strict";
var TenantWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderListRelationFilter_1 = require("../inputs/BookingOrderListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const ExperienceListRelationFilter_1 = require("../inputs/ExperienceListRelationFilter");
const LocationListRelationFilter_1 = require("../inputs/LocationListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const StringNullableListFilter_1 = require("../inputs/StringNullableListFilter");
const UserListRelationFilter_1 = require("../inputs/UserListRelationFilter");
let TenantWhereInput = TenantWhereInput_1 = class TenantWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TenantWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TenantWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TenantWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TenantWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TenantWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TenantWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TenantWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TenantWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TenantWhereInput.prototype, "slug", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TenantWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TenantWhereInput.prototype, "logoImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TenantWhereInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TenantWhereInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], TenantWhereInput.prototype, "experienceImages", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserListRelationFilter_1.UserListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserListRelationFilter_1.UserListRelationFilter)
], TenantWhereInput.prototype, "Users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceListRelationFilter_1.ExperienceListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceListRelationFilter_1.ExperienceListRelationFilter)
], TenantWhereInput.prototype, "Experiences", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderListRelationFilter_1.BookingOrderListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderListRelationFilter_1.BookingOrderListRelationFilter)
], TenantWhereInput.prototype, "BookingOrders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationListRelationFilter_1.LocationListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationListRelationFilter_1.LocationListRelationFilter)
], TenantWhereInput.prototype, "Locations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TenantWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TenantWhereInput.prototype, "updatedAt", void 0);
TenantWhereInput = TenantWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantWhereInput", {
        isAbstract: true
    })
], TenantWhereInput);
exports.TenantWhereInput = TenantWhereInput;
