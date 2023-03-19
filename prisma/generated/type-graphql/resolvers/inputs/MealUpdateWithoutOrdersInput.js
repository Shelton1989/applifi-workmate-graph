"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpdateWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingUpdateOneWithoutMealInput_1 = require("../inputs/AggregateRatingUpdateOneWithoutMealInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumPUBLISH_STATUSFieldUpdateOperationsInput_1 = require("../inputs/EnumPUBLISH_STATUSFieldUpdateOperationsInput");
const FeaturesUpdateManyWithoutMealInput_1 = require("../inputs/FeaturesUpdateManyWithoutMealInput");
const MealAvailabilityUpdateManyWithoutMealInput_1 = require("../inputs/MealAvailabilityUpdateManyWithoutMealInput");
const MealItemUpdateManyWithoutMealsInput_1 = require("../inputs/MealItemUpdateManyWithoutMealsInput");
const MealUpdatedietaryRestrictionsInput_1 = require("../inputs/MealUpdatedietaryRestrictionsInput");
const MealUpdatedoctorSpecificDietsInput_1 = require("../inputs/MealUpdatedoctorSpecificDietsInput");
const MealUpdategalleryInput_1 = require("../inputs/MealUpdategalleryInput");
const MealUpdateitemIdsInput_1 = require("../inputs/MealUpdateitemIdsInput");
const MealUpdatelikedByIdsInput_1 = require("../inputs/MealUpdatelikedByIdsInput");
const MealUpdatemealKindsInput_1 = require("../inputs/MealUpdatemealKindsInput");
const MealUpdatemealTypesInput_1 = require("../inputs/MealUpdatemealTypesInput");
const MealUpdatespecialDietsInput_1 = require("../inputs/MealUpdatespecialDietsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PostUpdateManyWithoutMealInput_1 = require("../inputs/PostUpdateManyWithoutMealInput");
const ReactionUpdateManyWithoutMealInput_1 = require("../inputs/ReactionUpdateManyWithoutMealInput");
const TenantUpdateOneRequiredWithoutMealsInput_1 = require("../inputs/TenantUpdateOneRequiredWithoutMealsInput");
const UserUpdateManyWithoutLikedMealsInput_1 = require("../inputs/UserUpdateManyWithoutLikedMealsInput");
let MealUpdateWithoutOrdersInput = class MealUpdateWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateOneRequiredWithoutMealsInput_1.TenantUpdateOneRequiredWithoutMealsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpdateOneRequiredWithoutMealsInput_1.TenantUpdateOneRequiredWithoutMealsInput)
], MealUpdateWithoutOrdersInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], MealUpdateWithoutOrdersInput.prototype, "productLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], MealUpdateWithoutOrdersInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], MealUpdateWithoutOrdersInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdatedietaryRestrictionsInput_1.MealUpdatedietaryRestrictionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdatedietaryRestrictionsInput_1.MealUpdatedietaryRestrictionsInput)
], MealUpdateWithoutOrdersInput.prototype, "dietaryRestrictions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdatemealTypesInput_1.MealUpdatemealTypesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdatemealTypesInput_1.MealUpdatemealTypesInput)
], MealUpdateWithoutOrdersInput.prototype, "mealTypes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdatemealKindsInput_1.MealUpdatemealKindsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdatemealKindsInput_1.MealUpdatemealKindsInput)
], MealUpdateWithoutOrdersInput.prototype, "mealKinds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdatedoctorSpecificDietsInput_1.MealUpdatedoctorSpecificDietsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdatedoctorSpecificDietsInput_1.MealUpdatedoctorSpecificDietsInput)
], MealUpdateWithoutOrdersInput.prototype, "doctorSpecificDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdatespecialDietsInput_1.MealUpdatespecialDietsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdatespecialDietsInput_1.MealUpdatespecialDietsInput)
], MealUpdateWithoutOrdersInput.prototype, "specialDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemUpdateManyWithoutMealsInput_1.MealItemUpdateManyWithoutMealsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemUpdateManyWithoutMealsInput_1.MealItemUpdateManyWithoutMealsInput)
], MealUpdateWithoutOrdersInput.prototype, "Items", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateitemIdsInput_1.MealUpdateitemIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdateitemIdsInput_1.MealUpdateitemIdsInput)
], MealUpdateWithoutOrdersInput.prototype, "itemIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityUpdateManyWithoutMealInput_1.MealAvailabilityUpdateManyWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealAvailabilityUpdateManyWithoutMealInput_1.MealAvailabilityUpdateManyWithoutMealInput)
], MealUpdateWithoutOrdersInput.prototype, "Availability", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], MealUpdateWithoutOrdersInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdategalleryInput_1.MealUpdategalleryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdategalleryInput_1.MealUpdategalleryInput)
], MealUpdateWithoutOrdersInput.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingUpdateOneWithoutMealInput_1.AggregateRatingUpdateOneWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingUpdateOneWithoutMealInput_1.AggregateRatingUpdateOneWithoutMealInput)
], MealUpdateWithoutOrdersInput.prototype, "AggregateRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPUBLISH_STATUSFieldUpdateOperationsInput_1.EnumPUBLISH_STATUSFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPUBLISH_STATUSFieldUpdateOperationsInput_1.EnumPUBLISH_STATUSFieldUpdateOperationsInput)
], MealUpdateWithoutOrdersInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateManyWithoutLikedMealsInput_1.UserUpdateManyWithoutLikedMealsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateManyWithoutLikedMealsInput_1.UserUpdateManyWithoutLikedMealsInput)
], MealUpdateWithoutOrdersInput.prototype, "LikedBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdatelikedByIdsInput_1.MealUpdatelikedByIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdatelikedByIdsInput_1.MealUpdatelikedByIdsInput)
], MealUpdateWithoutOrdersInput.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateManyWithoutMealInput_1.PostUpdateManyWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateManyWithoutMealInput_1.PostUpdateManyWithoutMealInput)
], MealUpdateWithoutOrdersInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesUpdateManyWithoutMealInput_1.FeaturesUpdateManyWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesUpdateManyWithoutMealInput_1.FeaturesUpdateManyWithoutMealInput)
], MealUpdateWithoutOrdersInput.prototype, "Features", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateManyWithoutMealInput_1.ReactionUpdateManyWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionUpdateManyWithoutMealInput_1.ReactionUpdateManyWithoutMealInput)
], MealUpdateWithoutOrdersInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MealUpdateWithoutOrdersInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MealUpdateWithoutOrdersInput.prototype, "updatedAt", void 0);
MealUpdateWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpdateWithoutOrdersInput", {
        isAbstract: true
    })
], MealUpdateWithoutOrdersInput);
exports.MealUpdateWithoutOrdersInput = MealUpdateWithoutOrdersInput;
