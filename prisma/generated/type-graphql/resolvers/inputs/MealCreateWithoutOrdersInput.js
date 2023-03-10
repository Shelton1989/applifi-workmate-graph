"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealCreateWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingCreateNestedOneWithoutMealInput_1 = require("../inputs/AggregateRatingCreateNestedOneWithoutMealInput");
const FeaturesCreateNestedManyWithoutMealInput_1 = require("../inputs/FeaturesCreateNestedManyWithoutMealInput");
const MealAvailabilityCreateNestedManyWithoutMealInput_1 = require("../inputs/MealAvailabilityCreateNestedManyWithoutMealInput");
const MealCreateallowedMealKindsInput_1 = require("../inputs/MealCreateallowedMealKindsInput");
const MealCreateallowedMealTypesInput_1 = require("../inputs/MealCreateallowedMealTypesInput");
const MealCreatedietaryRestrictionsInput_1 = require("../inputs/MealCreatedietaryRestrictionsInput");
const MealCreatedoctorSpecificDietsInput_1 = require("../inputs/MealCreatedoctorSpecificDietsInput");
const MealCreategalleryInput_1 = require("../inputs/MealCreategalleryInput");
const MealCreateitemIdsInput_1 = require("../inputs/MealCreateitemIdsInput");
const MealCreatelikedByIdsInput_1 = require("../inputs/MealCreatelikedByIdsInput");
const MealCreatespecialDietsInput_1 = require("../inputs/MealCreatespecialDietsInput");
const MealItemCreateNestedManyWithoutMealsInput_1 = require("../inputs/MealItemCreateNestedManyWithoutMealsInput");
const PostCreateNestedManyWithoutMealInput_1 = require("../inputs/PostCreateNestedManyWithoutMealInput");
const ReactionCreateNestedManyWithoutMealInput_1 = require("../inputs/ReactionCreateNestedManyWithoutMealInput");
const TenantCreateNestedOneWithoutMealsInput_1 = require("../inputs/TenantCreateNestedOneWithoutMealsInput");
const UserCreateNestedManyWithoutLikedMealsInput_1 = require("../inputs/UserCreateNestedManyWithoutLikedMealsInput");
const PUBLISH_STATUS_1 = require("../../enums/PUBLISH_STATUS");
let MealCreateWithoutOrdersInput = class MealCreateWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealCreateWithoutOrdersInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateNestedOneWithoutMealsInput_1.TenantCreateNestedOneWithoutMealsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateNestedOneWithoutMealsInput_1.TenantCreateNestedOneWithoutMealsInput)
], MealCreateWithoutOrdersInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealCreateWithoutOrdersInput.prototype, "productLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealCreateWithoutOrdersInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealCreateWithoutOrdersInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreatedietaryRestrictionsInput_1.MealCreatedietaryRestrictionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreatedietaryRestrictionsInput_1.MealCreatedietaryRestrictionsInput)
], MealCreateWithoutOrdersInput.prototype, "dietaryRestrictions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateallowedMealTypesInput_1.MealCreateallowedMealTypesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateallowedMealTypesInput_1.MealCreateallowedMealTypesInput)
], MealCreateWithoutOrdersInput.prototype, "allowedMealTypes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateallowedMealKindsInput_1.MealCreateallowedMealKindsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateallowedMealKindsInput_1.MealCreateallowedMealKindsInput)
], MealCreateWithoutOrdersInput.prototype, "allowedMealKinds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreatedoctorSpecificDietsInput_1.MealCreatedoctorSpecificDietsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreatedoctorSpecificDietsInput_1.MealCreatedoctorSpecificDietsInput)
], MealCreateWithoutOrdersInput.prototype, "doctorSpecificDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreatespecialDietsInput_1.MealCreatespecialDietsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreatespecialDietsInput_1.MealCreatespecialDietsInput)
], MealCreateWithoutOrdersInput.prototype, "specialDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemCreateNestedManyWithoutMealsInput_1.MealItemCreateNestedManyWithoutMealsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemCreateNestedManyWithoutMealsInput_1.MealItemCreateNestedManyWithoutMealsInput)
], MealCreateWithoutOrdersInput.prototype, "Items", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateitemIdsInput_1.MealCreateitemIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateitemIdsInput_1.MealCreateitemIdsInput)
], MealCreateWithoutOrdersInput.prototype, "itemIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityCreateNestedManyWithoutMealInput_1.MealAvailabilityCreateNestedManyWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealAvailabilityCreateNestedManyWithoutMealInput_1.MealAvailabilityCreateNestedManyWithoutMealInput)
], MealCreateWithoutOrdersInput.prototype, "Availability", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealCreateWithoutOrdersInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreategalleryInput_1.MealCreategalleryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreategalleryInput_1.MealCreategalleryInput)
], MealCreateWithoutOrdersInput.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateNestedOneWithoutMealInput_1.AggregateRatingCreateNestedOneWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateNestedOneWithoutMealInput_1.AggregateRatingCreateNestedOneWithoutMealInput)
], MealCreateWithoutOrdersInput.prototype, "AggregateRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PUBLISH_STATUS_1.PUBLISH_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealCreateWithoutOrdersInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutLikedMealsInput_1.UserCreateNestedManyWithoutLikedMealsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedManyWithoutLikedMealsInput_1.UserCreateNestedManyWithoutLikedMealsInput)
], MealCreateWithoutOrdersInput.prototype, "LikedBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreatelikedByIdsInput_1.MealCreatelikedByIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreatelikedByIdsInput_1.MealCreatelikedByIdsInput)
], MealCreateWithoutOrdersInput.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutMealInput_1.PostCreateNestedManyWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateNestedManyWithoutMealInput_1.PostCreateNestedManyWithoutMealInput)
], MealCreateWithoutOrdersInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesCreateNestedManyWithoutMealInput_1.FeaturesCreateNestedManyWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesCreateNestedManyWithoutMealInput_1.FeaturesCreateNestedManyWithoutMealInput)
], MealCreateWithoutOrdersInput.prototype, "Features", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateNestedManyWithoutMealInput_1.ReactionCreateNestedManyWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateNestedManyWithoutMealInput_1.ReactionCreateNestedManyWithoutMealInput)
], MealCreateWithoutOrdersInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealCreateWithoutOrdersInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealCreateWithoutOrdersInput.prototype, "updatedAt", void 0);
MealCreateWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealCreateWithoutOrdersInput", {
        isAbstract: true
    })
], MealCreateWithoutOrdersInput);
exports.MealCreateWithoutOrdersInput = MealCreateWithoutOrdersInput;
