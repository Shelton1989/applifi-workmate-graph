"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpdateWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingUpdateOneWithoutMealInput_1 = require("../inputs/AggregateRatingUpdateOneWithoutMealInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumPUBLISH_STATUSFieldUpdateOperationsInput_1 = require("../inputs/EnumPUBLISH_STATUSFieldUpdateOperationsInput");
const FeaturesUpdateManyWithoutMealInput_1 = require("../inputs/FeaturesUpdateManyWithoutMealInput");
const MealAvailabilityUpdateManyWithoutMealInput_1 = require("../inputs/MealAvailabilityUpdateManyWithoutMealInput");
const MealItemUpdateManyWithoutMealsInput_1 = require("../inputs/MealItemUpdateManyWithoutMealsInput");
const MealUpdateallowedMealKindsInput_1 = require("../inputs/MealUpdateallowedMealKindsInput");
const MealUpdateallowedMealTypesInput_1 = require("../inputs/MealUpdateallowedMealTypesInput");
const MealUpdatedietaryRestrictionsInput_1 = require("../inputs/MealUpdatedietaryRestrictionsInput");
const MealUpdatedoctorSpecificDietsInput_1 = require("../inputs/MealUpdatedoctorSpecificDietsInput");
const MealUpdategalleryInput_1 = require("../inputs/MealUpdategalleryInput");
const MealUpdateitemIdsInput_1 = require("../inputs/MealUpdateitemIdsInput");
const MealUpdatelikedByIdsInput_1 = require("../inputs/MealUpdatelikedByIdsInput");
const MealUpdatespecialDietsInput_1 = require("../inputs/MealUpdatespecialDietsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const OrderUpdateManyWithoutMealInput_1 = require("../inputs/OrderUpdateManyWithoutMealInput");
const ReactionUpdateManyWithoutMealInput_1 = require("../inputs/ReactionUpdateManyWithoutMealInput");
const TenantUpdateOneRequiredWithoutMealsInput_1 = require("../inputs/TenantUpdateOneRequiredWithoutMealsInput");
const UserUpdateManyWithoutLikedMealsInput_1 = require("../inputs/UserUpdateManyWithoutLikedMealsInput");
let MealUpdateWithoutPostsInput = class MealUpdateWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateOneRequiredWithoutMealsInput_1.TenantUpdateOneRequiredWithoutMealsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpdateOneRequiredWithoutMealsInput_1.TenantUpdateOneRequiredWithoutMealsInput)
], MealUpdateWithoutPostsInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], MealUpdateWithoutPostsInput.prototype, "productLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], MealUpdateWithoutPostsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], MealUpdateWithoutPostsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdatedietaryRestrictionsInput_1.MealUpdatedietaryRestrictionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdatedietaryRestrictionsInput_1.MealUpdatedietaryRestrictionsInput)
], MealUpdateWithoutPostsInput.prototype, "dietaryRestrictions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateallowedMealTypesInput_1.MealUpdateallowedMealTypesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdateallowedMealTypesInput_1.MealUpdateallowedMealTypesInput)
], MealUpdateWithoutPostsInput.prototype, "allowedMealTypes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateallowedMealKindsInput_1.MealUpdateallowedMealKindsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdateallowedMealKindsInput_1.MealUpdateallowedMealKindsInput)
], MealUpdateWithoutPostsInput.prototype, "allowedMealKinds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdatedoctorSpecificDietsInput_1.MealUpdatedoctorSpecificDietsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdatedoctorSpecificDietsInput_1.MealUpdatedoctorSpecificDietsInput)
], MealUpdateWithoutPostsInput.prototype, "doctorSpecificDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdatespecialDietsInput_1.MealUpdatespecialDietsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdatespecialDietsInput_1.MealUpdatespecialDietsInput)
], MealUpdateWithoutPostsInput.prototype, "specialDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemUpdateManyWithoutMealsInput_1.MealItemUpdateManyWithoutMealsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemUpdateManyWithoutMealsInput_1.MealItemUpdateManyWithoutMealsInput)
], MealUpdateWithoutPostsInput.prototype, "Items", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateitemIdsInput_1.MealUpdateitemIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdateitemIdsInput_1.MealUpdateitemIdsInput)
], MealUpdateWithoutPostsInput.prototype, "itemIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityUpdateManyWithoutMealInput_1.MealAvailabilityUpdateManyWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealAvailabilityUpdateManyWithoutMealInput_1.MealAvailabilityUpdateManyWithoutMealInput)
], MealUpdateWithoutPostsInput.prototype, "Availability", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateManyWithoutMealInput_1.OrderUpdateManyWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderUpdateManyWithoutMealInput_1.OrderUpdateManyWithoutMealInput)
], MealUpdateWithoutPostsInput.prototype, "Orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], MealUpdateWithoutPostsInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdategalleryInput_1.MealUpdategalleryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdategalleryInput_1.MealUpdategalleryInput)
], MealUpdateWithoutPostsInput.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingUpdateOneWithoutMealInput_1.AggregateRatingUpdateOneWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingUpdateOneWithoutMealInput_1.AggregateRatingUpdateOneWithoutMealInput)
], MealUpdateWithoutPostsInput.prototype, "AggregateRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPUBLISH_STATUSFieldUpdateOperationsInput_1.EnumPUBLISH_STATUSFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPUBLISH_STATUSFieldUpdateOperationsInput_1.EnumPUBLISH_STATUSFieldUpdateOperationsInput)
], MealUpdateWithoutPostsInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateManyWithoutLikedMealsInput_1.UserUpdateManyWithoutLikedMealsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateManyWithoutLikedMealsInput_1.UserUpdateManyWithoutLikedMealsInput)
], MealUpdateWithoutPostsInput.prototype, "LikedBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdatelikedByIdsInput_1.MealUpdatelikedByIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdatelikedByIdsInput_1.MealUpdatelikedByIdsInput)
], MealUpdateWithoutPostsInput.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesUpdateManyWithoutMealInput_1.FeaturesUpdateManyWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesUpdateManyWithoutMealInput_1.FeaturesUpdateManyWithoutMealInput)
], MealUpdateWithoutPostsInput.prototype, "Features", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateManyWithoutMealInput_1.ReactionUpdateManyWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionUpdateManyWithoutMealInput_1.ReactionUpdateManyWithoutMealInput)
], MealUpdateWithoutPostsInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MealUpdateWithoutPostsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MealUpdateWithoutPostsInput.prototype, "updatedAt", void 0);
MealUpdateWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpdateWithoutPostsInput", {
        isAbstract: true
    })
], MealUpdateWithoutPostsInput);
exports.MealUpdateWithoutPostsInput = MealUpdateWithoutPostsInput;
