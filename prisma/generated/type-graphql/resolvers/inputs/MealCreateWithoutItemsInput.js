"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealCreateWithoutItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingCreateNestedOneWithoutMealInput_1 = require("../inputs/AggregateRatingCreateNestedOneWithoutMealInput");
const FeaturesCreateNestedManyWithoutMealInput_1 = require("../inputs/FeaturesCreateNestedManyWithoutMealInput");
const MealAvailabilityCreateNestedManyWithoutMealInput_1 = require("../inputs/MealAvailabilityCreateNestedManyWithoutMealInput");
const MealCreatedietaryRestrictionsInput_1 = require("../inputs/MealCreatedietaryRestrictionsInput");
const MealCreatedoctorSpecificDietsInput_1 = require("../inputs/MealCreatedoctorSpecificDietsInput");
const MealCreategalleryInput_1 = require("../inputs/MealCreategalleryInput");
const MealCreateitemIdsInput_1 = require("../inputs/MealCreateitemIdsInput");
const MealCreatelikedByIdsInput_1 = require("../inputs/MealCreatelikedByIdsInput");
const MealCreatemealKindsInput_1 = require("../inputs/MealCreatemealKindsInput");
const MealCreatemealTypesInput_1 = require("../inputs/MealCreatemealTypesInput");
const MealCreatespecialDietsInput_1 = require("../inputs/MealCreatespecialDietsInput");
const OrderCreateNestedManyWithoutMealInput_1 = require("../inputs/OrderCreateNestedManyWithoutMealInput");
const PostCreateNestedManyWithoutMealInput_1 = require("../inputs/PostCreateNestedManyWithoutMealInput");
const ReactionCreateNestedManyWithoutMealInput_1 = require("../inputs/ReactionCreateNestedManyWithoutMealInput");
const TenantCreateNestedOneWithoutMealsInput_1 = require("../inputs/TenantCreateNestedOneWithoutMealsInput");
const UserCreateNestedManyWithoutLikedMealsInput_1 = require("../inputs/UserCreateNestedManyWithoutLikedMealsInput");
const PUBLISH_STATUS_1 = require("../../enums/PUBLISH_STATUS");
let MealCreateWithoutItemsInput = class MealCreateWithoutItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealCreateWithoutItemsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateNestedOneWithoutMealsInput_1.TenantCreateNestedOneWithoutMealsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateNestedOneWithoutMealsInput_1.TenantCreateNestedOneWithoutMealsInput)
], MealCreateWithoutItemsInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealCreateWithoutItemsInput.prototype, "productLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealCreateWithoutItemsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealCreateWithoutItemsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreatedietaryRestrictionsInput_1.MealCreatedietaryRestrictionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreatedietaryRestrictionsInput_1.MealCreatedietaryRestrictionsInput)
], MealCreateWithoutItemsInput.prototype, "dietaryRestrictions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreatemealTypesInput_1.MealCreatemealTypesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreatemealTypesInput_1.MealCreatemealTypesInput)
], MealCreateWithoutItemsInput.prototype, "mealTypes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreatemealKindsInput_1.MealCreatemealKindsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreatemealKindsInput_1.MealCreatemealKindsInput)
], MealCreateWithoutItemsInput.prototype, "mealKinds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreatedoctorSpecificDietsInput_1.MealCreatedoctorSpecificDietsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreatedoctorSpecificDietsInput_1.MealCreatedoctorSpecificDietsInput)
], MealCreateWithoutItemsInput.prototype, "doctorSpecificDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreatespecialDietsInput_1.MealCreatespecialDietsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreatespecialDietsInput_1.MealCreatespecialDietsInput)
], MealCreateWithoutItemsInput.prototype, "specialDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateitemIdsInput_1.MealCreateitemIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateitemIdsInput_1.MealCreateitemIdsInput)
], MealCreateWithoutItemsInput.prototype, "itemIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityCreateNestedManyWithoutMealInput_1.MealAvailabilityCreateNestedManyWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealAvailabilityCreateNestedManyWithoutMealInput_1.MealAvailabilityCreateNestedManyWithoutMealInput)
], MealCreateWithoutItemsInput.prototype, "Availability", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedManyWithoutMealInput_1.OrderCreateNestedManyWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateNestedManyWithoutMealInput_1.OrderCreateNestedManyWithoutMealInput)
], MealCreateWithoutItemsInput.prototype, "Orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealCreateWithoutItemsInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreategalleryInput_1.MealCreategalleryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreategalleryInput_1.MealCreategalleryInput)
], MealCreateWithoutItemsInput.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateNestedOneWithoutMealInput_1.AggregateRatingCreateNestedOneWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateNestedOneWithoutMealInput_1.AggregateRatingCreateNestedOneWithoutMealInput)
], MealCreateWithoutItemsInput.prototype, "AggregateRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PUBLISH_STATUS_1.PUBLISH_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealCreateWithoutItemsInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutLikedMealsInput_1.UserCreateNestedManyWithoutLikedMealsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedManyWithoutLikedMealsInput_1.UserCreateNestedManyWithoutLikedMealsInput)
], MealCreateWithoutItemsInput.prototype, "LikedBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreatelikedByIdsInput_1.MealCreatelikedByIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreatelikedByIdsInput_1.MealCreatelikedByIdsInput)
], MealCreateWithoutItemsInput.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutMealInput_1.PostCreateNestedManyWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateNestedManyWithoutMealInput_1.PostCreateNestedManyWithoutMealInput)
], MealCreateWithoutItemsInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesCreateNestedManyWithoutMealInput_1.FeaturesCreateNestedManyWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesCreateNestedManyWithoutMealInput_1.FeaturesCreateNestedManyWithoutMealInput)
], MealCreateWithoutItemsInput.prototype, "Features", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateNestedManyWithoutMealInput_1.ReactionCreateNestedManyWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateNestedManyWithoutMealInput_1.ReactionCreateNestedManyWithoutMealInput)
], MealCreateWithoutItemsInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealCreateWithoutItemsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealCreateWithoutItemsInput.prototype, "updatedAt", void 0);
MealCreateWithoutItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealCreateWithoutItemsInput", {
        isAbstract: true
    })
], MealCreateWithoutItemsInput);
exports.MealCreateWithoutItemsInput = MealCreateWithoutItemsInput;
