"use strict";
var ExperienceWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingRelationFilter_1 = require("../inputs/AggregateRatingRelationFilter");
const BookingOrderListRelationFilter_1 = require("../inputs/BookingOrderListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumEXPERIENCE_CATEGORYNullableFilter_1 = require("../inputs/EnumEXPERIENCE_CATEGORYNullableFilter");
const EnumPUBLISH_STATUSFilter_1 = require("../inputs/EnumPUBLISH_STATUSFilter");
const ExperienceAvailabilityListRelationFilter_1 = require("../inputs/ExperienceAvailabilityListRelationFilter");
const FeaturesListRelationFilter_1 = require("../inputs/FeaturesListRelationFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const LocationListRelationFilter_1 = require("../inputs/LocationListRelationFilter");
const PostListRelationFilter_1 = require("../inputs/PostListRelationFilter");
const PriceRelationFilter_1 = require("../inputs/PriceRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const StringNullableListFilter_1 = require("../inputs/StringNullableListFilter");
const TenantRelationFilter_1 = require("../inputs/TenantRelationFilter");
const UserListRelationFilter_1 = require("../inputs/UserListRelationFilter");
let ExperienceWhereInput = ExperienceWhereInput_1 = class ExperienceWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ExperienceWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantRelationFilter_1.TenantRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantRelationFilter_1.TenantRelationFilter)
], ExperienceWhereInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ExperienceWhereInput.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ExperienceWhereInput.prototype, "productLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ExperienceWhereInput.prototype, "stripeProductId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ExperienceWhereInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ExperienceWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEXPERIENCE_CATEGORYNullableFilter_1.EnumEXPERIENCE_CATEGORYNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEXPERIENCE_CATEGORYNullableFilter_1.EnumEXPERIENCE_CATEGORYNullableFilter)
], ExperienceWhereInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityListRelationFilter_1.ExperienceAvailabilityListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityListRelationFilter_1.ExperienceAvailabilityListRelationFilter)
], ExperienceWhereInput.prototype, "Availability", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderListRelationFilter_1.BookingOrderListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderListRelationFilter_1.BookingOrderListRelationFilter)
], ExperienceWhereInput.prototype, "Bookings", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ExperienceWhereInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], ExperienceWhereInput.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], ExperienceWhereInput.prototype, "duration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingRelationFilter_1.AggregateRatingRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingRelationFilter_1.AggregateRatingRelationFilter)
], ExperienceWhereInput.prototype, "AggregateRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPUBLISH_STATUSFilter_1.EnumPUBLISH_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPUBLISH_STATUSFilter_1.EnumPUBLISH_STATUSFilter)
], ExperienceWhereInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserListRelationFilter_1.UserListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserListRelationFilter_1.UserListRelationFilter)
], ExperienceWhereInput.prototype, "LikedBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], ExperienceWhereInput.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationListRelationFilter_1.LocationListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationListRelationFilter_1.LocationListRelationFilter)
], ExperienceWhereInput.prototype, "Locations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceRelationFilter_1.PriceRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceRelationFilter_1.PriceRelationFilter)
], ExperienceWhereInput.prototype, "Price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostListRelationFilter_1.PostListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostListRelationFilter_1.PostListRelationFilter)
], ExperienceWhereInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesListRelationFilter_1.FeaturesListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesListRelationFilter_1.FeaturesListRelationFilter)
], ExperienceWhereInput.prototype, "Features", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ExperienceWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ExperienceWhereInput.prototype, "updatedAt", void 0);
ExperienceWhereInput = ExperienceWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceWhereInput", {
        isAbstract: true
    })
], ExperienceWhereInput);
exports.ExperienceWhereInput = ExperienceWhereInput;
