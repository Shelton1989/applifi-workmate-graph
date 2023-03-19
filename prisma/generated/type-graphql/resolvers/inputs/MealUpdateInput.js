"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpdateInput = void 0;
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
const OrderUpdateManyWithoutMealInput_1 = require("../inputs/OrderUpdateManyWithoutMealInput");
const PostUpdateManyWithoutMealInput_1 = require("../inputs/PostUpdateManyWithoutMealInput");
const ReactionUpdateManyWithoutMealInput_1 = require("../inputs/ReactionUpdateManyWithoutMealInput");
const TenantUpdateOneRequiredWithoutMealsInput_1 = require("../inputs/TenantUpdateOneRequiredWithoutMealsInput");
const UserUpdateManyWithoutLikedMealsInput_1 = require("../inputs/UserUpdateManyWithoutLikedMealsInput");
let MealUpdateInput = class MealUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateOneRequiredWithoutMealsInput_1.TenantUpdateOneRequiredWithoutMealsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpdateOneRequiredWithoutMealsInput_1.TenantUpdateOneRequiredWithoutMealsInput)
], MealUpdateInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], MealUpdateInput.prototype, "productLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], MealUpdateInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], MealUpdateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdatedietaryRestrictionsInput_1.MealUpdatedietaryRestrictionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdatedietaryRestrictionsInput_1.MealUpdatedietaryRestrictionsInput)
], MealUpdateInput.prototype, "dietaryRestrictions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdatemealTypesInput_1.MealUpdatemealTypesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdatemealTypesInput_1.MealUpdatemealTypesInput)
], MealUpdateInput.prototype, "mealTypes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdatemealKindsInput_1.MealUpdatemealKindsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdatemealKindsInput_1.MealUpdatemealKindsInput)
], MealUpdateInput.prototype, "mealKinds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdatedoctorSpecificDietsInput_1.MealUpdatedoctorSpecificDietsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdatedoctorSpecificDietsInput_1.MealUpdatedoctorSpecificDietsInput)
], MealUpdateInput.prototype, "doctorSpecificDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdatespecialDietsInput_1.MealUpdatespecialDietsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdatespecialDietsInput_1.MealUpdatespecialDietsInput)
], MealUpdateInput.prototype, "specialDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemUpdateManyWithoutMealsInput_1.MealItemUpdateManyWithoutMealsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemUpdateManyWithoutMealsInput_1.MealItemUpdateManyWithoutMealsInput)
], MealUpdateInput.prototype, "Items", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateitemIdsInput_1.MealUpdateitemIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdateitemIdsInput_1.MealUpdateitemIdsInput)
], MealUpdateInput.prototype, "itemIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityUpdateManyWithoutMealInput_1.MealAvailabilityUpdateManyWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealAvailabilityUpdateManyWithoutMealInput_1.MealAvailabilityUpdateManyWithoutMealInput)
], MealUpdateInput.prototype, "Availability", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateManyWithoutMealInput_1.OrderUpdateManyWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderUpdateManyWithoutMealInput_1.OrderUpdateManyWithoutMealInput)
], MealUpdateInput.prototype, "Orders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], MealUpdateInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdategalleryInput_1.MealUpdategalleryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdategalleryInput_1.MealUpdategalleryInput)
], MealUpdateInput.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingUpdateOneWithoutMealInput_1.AggregateRatingUpdateOneWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingUpdateOneWithoutMealInput_1.AggregateRatingUpdateOneWithoutMealInput)
], MealUpdateInput.prototype, "AggregateRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPUBLISH_STATUSFieldUpdateOperationsInput_1.EnumPUBLISH_STATUSFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPUBLISH_STATUSFieldUpdateOperationsInput_1.EnumPUBLISH_STATUSFieldUpdateOperationsInput)
], MealUpdateInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateManyWithoutLikedMealsInput_1.UserUpdateManyWithoutLikedMealsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateManyWithoutLikedMealsInput_1.UserUpdateManyWithoutLikedMealsInput)
], MealUpdateInput.prototype, "LikedBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdatelikedByIdsInput_1.MealUpdatelikedByIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdatelikedByIdsInput_1.MealUpdatelikedByIdsInput)
], MealUpdateInput.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateManyWithoutMealInput_1.PostUpdateManyWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateManyWithoutMealInput_1.PostUpdateManyWithoutMealInput)
], MealUpdateInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesUpdateManyWithoutMealInput_1.FeaturesUpdateManyWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesUpdateManyWithoutMealInput_1.FeaturesUpdateManyWithoutMealInput)
], MealUpdateInput.prototype, "Features", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateManyWithoutMealInput_1.ReactionUpdateManyWithoutMealInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionUpdateManyWithoutMealInput_1.ReactionUpdateManyWithoutMealInput)
], MealUpdateInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MealUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MealUpdateInput.prototype, "updatedAt", void 0);
MealUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpdateInput", {
        isAbstract: true
    })
], MealUpdateInput);
exports.MealUpdateInput = MealUpdateInput;
