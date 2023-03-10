"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpdateWithoutAggregateRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
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
const PostUpdateManyWithoutMealInput_1 = require("../inputs/PostUpdateManyWithoutMealInput");
const ReactionUpdateManyWithoutMealInput_1 = require("../inputs/ReactionUpdateManyWithoutMealInput");
const TenantUpdateOneRequiredWithoutMealsInput_1 = require("../inputs/TenantUpdateOneRequiredWithoutMealsInput");
const UserUpdateManyWithoutLikedMealsInput_1 = require("../inputs/UserUpdateManyWithoutLikedMealsInput");
let MealUpdateWithoutAggregateRatingInput = class MealUpdateWithoutAggregateRatingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateOneRequiredWithoutMealsInput_1.TenantUpdateOneRequiredWithoutMealsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpdateOneRequiredWithoutMealsInput_1.TenantUpdateOneRequiredWithoutMealsInput)
], MealUpdateWithoutAggregateRatingInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], MealUpdateWithoutAggregateRatingInput.prototype, "productLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], MealUpdateWithoutAggregateRatingInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], MealUpdateWithoutAggregateRatingInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdatedietaryRestrictionsInput_1.MealUpdatedietaryRestrictionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdatedietaryRestrictionsInput_1.MealUpdatedietaryRestrictionsInput)
], MealUpdateWithoutAggregateRatingInput.prototype, "dietaryRestrictions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateallowedMealTypesInput_1.MealUpdateallowedMealTypesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdateallowedMealTypesInput_1.MealUpdateallowedMealTypesInput)
], MealUpdateWithoutAggregateRatingInput.prototype, "allowedMealTypes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateallowedMealKindsInput_1.MealUpdateallowedMealKindsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdateallowedMealKindsInput_1.MealUpdateallowedMealKindsInput)
], MealUpdateWithoutAggregateRatingInput.prototype, "allowedMealKinds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdatedoctorSpecificDietsInput_1.MealUpdatedoctorSpecificDietsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdatedoctorSpecificDietsInput_1.MealUpdatedoctorSpecificDietsInput)
], MealUpdateWithoutAggregateRatingInput.prototype, "doctorSpecificDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdatespecialDietsInput_1.MealUpdatespecialDietsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdatespecialDietsInput_1.MealUpdatespecialDietsInput)
], MealUpdateWithoutAggregateRatingInput.prototype, "specialDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemUpdateManyWithoutMealsInput_1.MealItemUpdateManyWithoutMealsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemUpdateManyWithoutMealsInput_1.MealItemUpdateManyWithoutMealsInput)
], MealUpdateWithoutAggregateRatingInput.prototype, "Items", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateitemIdsInput_1.MealUpdateitemIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdateitemIdsInput_1.MealUpdateitemIdsInput)
], MealUpdateWithoutAggregateRatingInput.prototype, "itemIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityUpdateManyWithoutMealInput_1.MealAvailabilityUpdateManyWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealAvailabilityUpdateManyWithoutMealInput_1.MealAvailabilityUpdateManyWithoutMealInput)
], MealUpdateWithoutAggregateRatingInput.prototype, "Availability", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateManyWithoutMealInput_1.OrderUpdateManyWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderUpdateManyWithoutMealInput_1.OrderUpdateManyWithoutMealInput)
], MealUpdateWithoutAggregateRatingInput.prototype, "Orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], MealUpdateWithoutAggregateRatingInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdategalleryInput_1.MealUpdategalleryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdategalleryInput_1.MealUpdategalleryInput)
], MealUpdateWithoutAggregateRatingInput.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPUBLISH_STATUSFieldUpdateOperationsInput_1.EnumPUBLISH_STATUSFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPUBLISH_STATUSFieldUpdateOperationsInput_1.EnumPUBLISH_STATUSFieldUpdateOperationsInput)
], MealUpdateWithoutAggregateRatingInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateManyWithoutLikedMealsInput_1.UserUpdateManyWithoutLikedMealsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateManyWithoutLikedMealsInput_1.UserUpdateManyWithoutLikedMealsInput)
], MealUpdateWithoutAggregateRatingInput.prototype, "LikedBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdatelikedByIdsInput_1.MealUpdatelikedByIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdatelikedByIdsInput_1.MealUpdatelikedByIdsInput)
], MealUpdateWithoutAggregateRatingInput.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateManyWithoutMealInput_1.PostUpdateManyWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateManyWithoutMealInput_1.PostUpdateManyWithoutMealInput)
], MealUpdateWithoutAggregateRatingInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesUpdateManyWithoutMealInput_1.FeaturesUpdateManyWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesUpdateManyWithoutMealInput_1.FeaturesUpdateManyWithoutMealInput)
], MealUpdateWithoutAggregateRatingInput.prototype, "Features", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateManyWithoutMealInput_1.ReactionUpdateManyWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionUpdateManyWithoutMealInput_1.ReactionUpdateManyWithoutMealInput)
], MealUpdateWithoutAggregateRatingInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MealUpdateWithoutAggregateRatingInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MealUpdateWithoutAggregateRatingInput.prototype, "updatedAt", void 0);
MealUpdateWithoutAggregateRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpdateWithoutAggregateRatingInput", {
        isAbstract: true
    })
], MealUpdateWithoutAggregateRatingInput);
exports.MealUpdateWithoutAggregateRatingInput = MealUpdateWithoutAggregateRatingInput;
