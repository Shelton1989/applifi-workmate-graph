"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceUpdateWithoutLocationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingUpdateOneWithoutExperienceInput_1 = require("../inputs/AggregateRatingUpdateOneWithoutExperienceInput");
const BookingOrderUpdateManyWithoutExperienceInput_1 = require("../inputs/BookingOrderUpdateManyWithoutExperienceInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumPUBLISH_STATUSFieldUpdateOperationsInput_1 = require("../inputs/EnumPUBLISH_STATUSFieldUpdateOperationsInput");
const ExperienceAvailabilityUpdateManyWithoutExperienceInput_1 = require("../inputs/ExperienceAvailabilityUpdateManyWithoutExperienceInput");
const ExperienceUpdategalleryInput_1 = require("../inputs/ExperienceUpdategalleryInput");
const ExperienceUpdatelikedByIdsInput_1 = require("../inputs/ExperienceUpdatelikedByIdsInput");
const FeaturesUpdateManyWithoutExperienceInput_1 = require("../inputs/FeaturesUpdateManyWithoutExperienceInput");
const NullableEnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput_1 = require("../inputs/NullableEnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput");
const NullableIntFieldUpdateOperationsInput_1 = require("../inputs/NullableIntFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PostUpdateManyWithoutExperienceInput_1 = require("../inputs/PostUpdateManyWithoutExperienceInput");
const PriceUpdateOneWithoutExperienceInput_1 = require("../inputs/PriceUpdateOneWithoutExperienceInput");
const TenantUpdateOneRequiredWithoutExperiencesInput_1 = require("../inputs/TenantUpdateOneRequiredWithoutExperiencesInput");
const UserUpdateManyWithoutLikedExperiencesInput_1 = require("../inputs/UserUpdateManyWithoutLikedExperiencesInput");
let ExperienceUpdateWithoutLocationsInput = class ExperienceUpdateWithoutLocationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateOneRequiredWithoutExperiencesInput_1.TenantUpdateOneRequiredWithoutExperiencesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpdateOneRequiredWithoutExperiencesInput_1.TenantUpdateOneRequiredWithoutExperiencesInput)
], ExperienceUpdateWithoutLocationsInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ExperienceUpdateWithoutLocationsInput.prototype, "productLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ExperienceUpdateWithoutLocationsInput.prototype, "stripeProductId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ExperienceUpdateWithoutLocationsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ExperienceUpdateWithoutLocationsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableEnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput_1.NullableEnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableEnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput_1.NullableEnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput)
], ExperienceUpdateWithoutLocationsInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityUpdateManyWithoutExperienceInput_1.ExperienceAvailabilityUpdateManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityUpdateManyWithoutExperienceInput_1.ExperienceAvailabilityUpdateManyWithoutExperienceInput)
], ExperienceUpdateWithoutLocationsInput.prototype, "Availability", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderUpdateManyWithoutExperienceInput_1.BookingOrderUpdateManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderUpdateManyWithoutExperienceInput_1.BookingOrderUpdateManyWithoutExperienceInput)
], ExperienceUpdateWithoutLocationsInput.prototype, "Bookings", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ExperienceUpdateWithoutLocationsInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdategalleryInput_1.ExperienceUpdategalleryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceUpdategalleryInput_1.ExperienceUpdategalleryInput)
], ExperienceUpdateWithoutLocationsInput.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], ExperienceUpdateWithoutLocationsInput.prototype, "duration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingUpdateOneWithoutExperienceInput_1.AggregateRatingUpdateOneWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingUpdateOneWithoutExperienceInput_1.AggregateRatingUpdateOneWithoutExperienceInput)
], ExperienceUpdateWithoutLocationsInput.prototype, "AggregateRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPUBLISH_STATUSFieldUpdateOperationsInput_1.EnumPUBLISH_STATUSFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPUBLISH_STATUSFieldUpdateOperationsInput_1.EnumPUBLISH_STATUSFieldUpdateOperationsInput)
], ExperienceUpdateWithoutLocationsInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateManyWithoutLikedExperiencesInput_1.UserUpdateManyWithoutLikedExperiencesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateManyWithoutLikedExperiencesInput_1.UserUpdateManyWithoutLikedExperiencesInput)
], ExperienceUpdateWithoutLocationsInput.prototype, "LikedBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdatelikedByIdsInput_1.ExperienceUpdatelikedByIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceUpdatelikedByIdsInput_1.ExperienceUpdatelikedByIdsInput)
], ExperienceUpdateWithoutLocationsInput.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpdateOneWithoutExperienceInput_1.PriceUpdateOneWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceUpdateOneWithoutExperienceInput_1.PriceUpdateOneWithoutExperienceInput)
], ExperienceUpdateWithoutLocationsInput.prototype, "Price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateManyWithoutExperienceInput_1.PostUpdateManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateManyWithoutExperienceInput_1.PostUpdateManyWithoutExperienceInput)
], ExperienceUpdateWithoutLocationsInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesUpdateManyWithoutExperienceInput_1.FeaturesUpdateManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesUpdateManyWithoutExperienceInput_1.FeaturesUpdateManyWithoutExperienceInput)
], ExperienceUpdateWithoutLocationsInput.prototype, "Features", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ExperienceUpdateWithoutLocationsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ExperienceUpdateWithoutLocationsInput.prototype, "updatedAt", void 0);
ExperienceUpdateWithoutLocationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceUpdateWithoutLocationsInput", {
        isAbstract: true
    })
], ExperienceUpdateWithoutLocationsInput);
exports.ExperienceUpdateWithoutLocationsInput = ExperienceUpdateWithoutLocationsInput;
