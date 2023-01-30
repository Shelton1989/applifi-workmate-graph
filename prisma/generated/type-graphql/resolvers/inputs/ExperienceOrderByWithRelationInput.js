"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingOrderByWithRelationInput_1 = require("../inputs/AggregateRatingOrderByWithRelationInput");
const ExperienceAvailabilityOrderByRelationAggregateInput_1 = require("../inputs/ExperienceAvailabilityOrderByRelationAggregateInput");
const FeaturesOrderByRelationAggregateInput_1 = require("../inputs/FeaturesOrderByRelationAggregateInput");
const LocationOrderByRelationAggregateInput_1 = require("../inputs/LocationOrderByRelationAggregateInput");
const PostOrderByRelationAggregateInput_1 = require("../inputs/PostOrderByRelationAggregateInput");
const PriceOrderByWithRelationInput_1 = require("../inputs/PriceOrderByWithRelationInput");
const TenantOrderByWithRelationInput_1 = require("../inputs/TenantOrderByWithRelationInput");
const UserOrderByRelationAggregateInput_1 = require("../inputs/UserOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ExperienceOrderByWithRelationInput = class ExperienceOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantOrderByWithRelationInput_1.TenantOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantOrderByWithRelationInput_1.TenantOrderByWithRelationInput)
], ExperienceOrderByWithRelationInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceOrderByWithRelationInput.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceOrderByWithRelationInput.prototype, "productLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceOrderByWithRelationInput.prototype, "stripeProductId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceOrderByWithRelationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceOrderByWithRelationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceOrderByWithRelationInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityOrderByRelationAggregateInput_1.ExperienceAvailabilityOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityOrderByRelationAggregateInput_1.ExperienceAvailabilityOrderByRelationAggregateInput)
], ExperienceOrderByWithRelationInput.prototype, "Availability", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceOrderByWithRelationInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceOrderByWithRelationInput.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceOrderByWithRelationInput.prototype, "duration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingOrderByWithRelationInput_1.AggregateRatingOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingOrderByWithRelationInput_1.AggregateRatingOrderByWithRelationInput)
], ExperienceOrderByWithRelationInput.prototype, "AggregateRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceOrderByWithRelationInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByRelationAggregateInput_1.UserOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByRelationAggregateInput_1.UserOrderByRelationAggregateInput)
], ExperienceOrderByWithRelationInput.prototype, "LikedBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceOrderByWithRelationInput.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationOrderByRelationAggregateInput_1.LocationOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationOrderByRelationAggregateInput_1.LocationOrderByRelationAggregateInput)
], ExperienceOrderByWithRelationInput.prototype, "Locations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceOrderByWithRelationInput_1.PriceOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceOrderByWithRelationInput_1.PriceOrderByWithRelationInput)
], ExperienceOrderByWithRelationInput.prototype, "Price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostOrderByRelationAggregateInput_1.PostOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostOrderByRelationAggregateInput_1.PostOrderByRelationAggregateInput)
], ExperienceOrderByWithRelationInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesOrderByRelationAggregateInput_1.FeaturesOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesOrderByRelationAggregateInput_1.FeaturesOrderByRelationAggregateInput)
], ExperienceOrderByWithRelationInput.prototype, "Features", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceOrderByWithRelationInput.prototype, "updatedAt", void 0);
ExperienceOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceOrderByWithRelationInput", {
        isAbstract: true
    })
], ExperienceOrderByWithRelationInput);
exports.ExperienceOrderByWithRelationInput = ExperienceOrderByWithRelationInput;
