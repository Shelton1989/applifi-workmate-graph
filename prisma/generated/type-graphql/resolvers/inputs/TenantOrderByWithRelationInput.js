"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderOrderByRelationAggregateInput_1 = require("../inputs/BookingOrderOrderByRelationAggregateInput");
const ExperienceOrderByRelationAggregateInput_1 = require("../inputs/ExperienceOrderByRelationAggregateInput");
const LocationOrderByRelationAggregateInput_1 = require("../inputs/LocationOrderByRelationAggregateInput");
const UserOrderByRelationAggregateInput_1 = require("../inputs/UserOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TenantOrderByWithRelationInput = class TenantOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantOrderByWithRelationInput.prototype, "slug", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantOrderByWithRelationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantOrderByWithRelationInput.prototype, "logoImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantOrderByWithRelationInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantOrderByWithRelationInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantOrderByWithRelationInput.prototype, "experienceImages", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByRelationAggregateInput_1.UserOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByRelationAggregateInput_1.UserOrderByRelationAggregateInput)
], TenantOrderByWithRelationInput.prototype, "Users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceOrderByRelationAggregateInput_1.ExperienceOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceOrderByRelationAggregateInput_1.ExperienceOrderByRelationAggregateInput)
], TenantOrderByWithRelationInput.prototype, "Experiences", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderOrderByRelationAggregateInput_1.BookingOrderOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderOrderByRelationAggregateInput_1.BookingOrderOrderByRelationAggregateInput)
], TenantOrderByWithRelationInput.prototype, "BookingOrders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationOrderByRelationAggregateInput_1.LocationOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationOrderByRelationAggregateInput_1.LocationOrderByRelationAggregateInput)
], TenantOrderByWithRelationInput.prototype, "Locations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantOrderByWithRelationInput.prototype, "updatedAt", void 0);
TenantOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantOrderByWithRelationInput", {
        isAbstract: true
    })
], TenantOrderByWithRelationInput);
exports.TenantOrderByWithRelationInput = TenantOrderByWithRelationInput;
