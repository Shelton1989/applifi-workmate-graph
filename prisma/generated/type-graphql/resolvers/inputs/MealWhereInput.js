"use strict";
var MealWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingRelationFilter_1 = require("../inputs/AggregateRatingRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumDIETARY_RESTRICTIONSNullableListFilter_1 = require("../inputs/EnumDIETARY_RESTRICTIONSNullableListFilter");
const EnumMEAL_KINDNullableListFilter_1 = require("../inputs/EnumMEAL_KINDNullableListFilter");
const EnumMEAL_TYPESNullableListFilter_1 = require("../inputs/EnumMEAL_TYPESNullableListFilter");
const EnumPUBLISH_STATUSFilter_1 = require("../inputs/EnumPUBLISH_STATUSFilter");
const EnumSPECIAL_DIETSNullableListFilter_1 = require("../inputs/EnumSPECIAL_DIETSNullableListFilter");
const FeaturesListRelationFilter_1 = require("../inputs/FeaturesListRelationFilter");
const MealAvailabilityListRelationFilter_1 = require("../inputs/MealAvailabilityListRelationFilter");
const MealItemListRelationFilter_1 = require("../inputs/MealItemListRelationFilter");
const OrderListRelationFilter_1 = require("../inputs/OrderListRelationFilter");
const PostListRelationFilter_1 = require("../inputs/PostListRelationFilter");
const ReactionListRelationFilter_1 = require("../inputs/ReactionListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const StringNullableListFilter_1 = require("../inputs/StringNullableListFilter");
const TenantRelationFilter_1 = require("../inputs/TenantRelationFilter");
const UserListRelationFilter_1 = require("../inputs/UserListRelationFilter");
let MealWhereInput = MealWhereInput_1 = class MealWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], MealWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantRelationFilter_1.TenantRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantRelationFilter_1.TenantRelationFilter)
], MealWhereInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], MealWhereInput.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], MealWhereInput.prototype, "productLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], MealWhereInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], MealWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumDIETARY_RESTRICTIONSNullableListFilter_1.EnumDIETARY_RESTRICTIONSNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumDIETARY_RESTRICTIONSNullableListFilter_1.EnumDIETARY_RESTRICTIONSNullableListFilter)
], MealWhereInput.prototype, "dietaryRestrictions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumMEAL_TYPESNullableListFilter_1.EnumMEAL_TYPESNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumMEAL_TYPESNullableListFilter_1.EnumMEAL_TYPESNullableListFilter)
], MealWhereInput.prototype, "mealTypes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumMEAL_KINDNullableListFilter_1.EnumMEAL_KINDNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumMEAL_KINDNullableListFilter_1.EnumMEAL_KINDNullableListFilter)
], MealWhereInput.prototype, "mealKinds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumDIETARY_RESTRICTIONSNullableListFilter_1.EnumDIETARY_RESTRICTIONSNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumDIETARY_RESTRICTIONSNullableListFilter_1.EnumDIETARY_RESTRICTIONSNullableListFilter)
], MealWhereInput.prototype, "doctorSpecificDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumSPECIAL_DIETSNullableListFilter_1.EnumSPECIAL_DIETSNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumSPECIAL_DIETSNullableListFilter_1.EnumSPECIAL_DIETSNullableListFilter)
], MealWhereInput.prototype, "specialDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemListRelationFilter_1.MealItemListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemListRelationFilter_1.MealItemListRelationFilter)
], MealWhereInput.prototype, "Items", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], MealWhereInput.prototype, "itemIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityListRelationFilter_1.MealAvailabilityListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealAvailabilityListRelationFilter_1.MealAvailabilityListRelationFilter)
], MealWhereInput.prototype, "Availability", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderListRelationFilter_1.OrderListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderListRelationFilter_1.OrderListRelationFilter)
], MealWhereInput.prototype, "Orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], MealWhereInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], MealWhereInput.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingRelationFilter_1.AggregateRatingRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingRelationFilter_1.AggregateRatingRelationFilter)
], MealWhereInput.prototype, "AggregateRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPUBLISH_STATUSFilter_1.EnumPUBLISH_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPUBLISH_STATUSFilter_1.EnumPUBLISH_STATUSFilter)
], MealWhereInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserListRelationFilter_1.UserListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserListRelationFilter_1.UserListRelationFilter)
], MealWhereInput.prototype, "LikedBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], MealWhereInput.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostListRelationFilter_1.PostListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostListRelationFilter_1.PostListRelationFilter)
], MealWhereInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesListRelationFilter_1.FeaturesListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesListRelationFilter_1.FeaturesListRelationFilter)
], MealWhereInput.prototype, "Features", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionListRelationFilter_1.ReactionListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionListRelationFilter_1.ReactionListRelationFilter)
], MealWhereInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], MealWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], MealWhereInput.prototype, "updatedAt", void 0);
MealWhereInput = MealWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("MealWhereInput", {
        isAbstract: true
    })
], MealWhereInput);
exports.MealWhereInput = MealWhereInput;
