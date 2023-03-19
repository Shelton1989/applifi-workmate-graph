"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealCreateWithoutPostsInput = void 0;
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
const MealItemCreateNestedManyWithoutMealsInput_1 = require("../inputs/MealItemCreateNestedManyWithoutMealsInput");
const OrderCreateNestedManyWithoutMealInput_1 = require("../inputs/OrderCreateNestedManyWithoutMealInput");
const ReactionCreateNestedManyWithoutMealInput_1 = require("../inputs/ReactionCreateNestedManyWithoutMealInput");
const TenantCreateNestedOneWithoutMealsInput_1 = require("../inputs/TenantCreateNestedOneWithoutMealsInput");
const UserCreateNestedManyWithoutLikedMealsInput_1 = require("../inputs/UserCreateNestedManyWithoutLikedMealsInput");
const PUBLISH_STATUS_1 = require("../../enums/PUBLISH_STATUS");
let MealCreateWithoutPostsInput = class MealCreateWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealCreateWithoutPostsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateNestedOneWithoutMealsInput_1.TenantCreateNestedOneWithoutMealsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateNestedOneWithoutMealsInput_1.TenantCreateNestedOneWithoutMealsInput)
], MealCreateWithoutPostsInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealCreateWithoutPostsInput.prototype, "productLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealCreateWithoutPostsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealCreateWithoutPostsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreatedietaryRestrictionsInput_1.MealCreatedietaryRestrictionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreatedietaryRestrictionsInput_1.MealCreatedietaryRestrictionsInput)
], MealCreateWithoutPostsInput.prototype, "dietaryRestrictions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreatemealTypesInput_1.MealCreatemealTypesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreatemealTypesInput_1.MealCreatemealTypesInput)
], MealCreateWithoutPostsInput.prototype, "mealTypes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreatemealKindsInput_1.MealCreatemealKindsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreatemealKindsInput_1.MealCreatemealKindsInput)
], MealCreateWithoutPostsInput.prototype, "mealKinds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreatedoctorSpecificDietsInput_1.MealCreatedoctorSpecificDietsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreatedoctorSpecificDietsInput_1.MealCreatedoctorSpecificDietsInput)
], MealCreateWithoutPostsInput.prototype, "doctorSpecificDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreatespecialDietsInput_1.MealCreatespecialDietsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreatespecialDietsInput_1.MealCreatespecialDietsInput)
], MealCreateWithoutPostsInput.prototype, "specialDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemCreateNestedManyWithoutMealsInput_1.MealItemCreateNestedManyWithoutMealsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemCreateNestedManyWithoutMealsInput_1.MealItemCreateNestedManyWithoutMealsInput)
], MealCreateWithoutPostsInput.prototype, "Items", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateitemIdsInput_1.MealCreateitemIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateitemIdsInput_1.MealCreateitemIdsInput)
], MealCreateWithoutPostsInput.prototype, "itemIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityCreateNestedManyWithoutMealInput_1.MealAvailabilityCreateNestedManyWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealAvailabilityCreateNestedManyWithoutMealInput_1.MealAvailabilityCreateNestedManyWithoutMealInput)
], MealCreateWithoutPostsInput.prototype, "Availability", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedManyWithoutMealInput_1.OrderCreateNestedManyWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateNestedManyWithoutMealInput_1.OrderCreateNestedManyWithoutMealInput)
], MealCreateWithoutPostsInput.prototype, "Orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealCreateWithoutPostsInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreategalleryInput_1.MealCreategalleryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreategalleryInput_1.MealCreategalleryInput)
], MealCreateWithoutPostsInput.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateNestedOneWithoutMealInput_1.AggregateRatingCreateNestedOneWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateNestedOneWithoutMealInput_1.AggregateRatingCreateNestedOneWithoutMealInput)
], MealCreateWithoutPostsInput.prototype, "AggregateRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PUBLISH_STATUS_1.PUBLISH_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealCreateWithoutPostsInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutLikedMealsInput_1.UserCreateNestedManyWithoutLikedMealsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedManyWithoutLikedMealsInput_1.UserCreateNestedManyWithoutLikedMealsInput)
], MealCreateWithoutPostsInput.prototype, "LikedBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreatelikedByIdsInput_1.MealCreatelikedByIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreatelikedByIdsInput_1.MealCreatelikedByIdsInput)
], MealCreateWithoutPostsInput.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesCreateNestedManyWithoutMealInput_1.FeaturesCreateNestedManyWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesCreateNestedManyWithoutMealInput_1.FeaturesCreateNestedManyWithoutMealInput)
], MealCreateWithoutPostsInput.prototype, "Features", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateNestedManyWithoutMealInput_1.ReactionCreateNestedManyWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateNestedManyWithoutMealInput_1.ReactionCreateNestedManyWithoutMealInput)
], MealCreateWithoutPostsInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealCreateWithoutPostsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealCreateWithoutPostsInput.prototype, "updatedAt", void 0);
MealCreateWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealCreateWithoutPostsInput", {
        isAbstract: true
    })
], MealCreateWithoutPostsInput);
exports.MealCreateWithoutPostsInput = MealCreateWithoutPostsInput;
