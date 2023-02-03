"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceUpdateWithoutLikedByInput = void 0;
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
const LocationUpdateManyWithoutExperienceInput_1 = require("../inputs/LocationUpdateManyWithoutExperienceInput");
const NullableEnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput_1 = require("../inputs/NullableEnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput");
const NullableIntFieldUpdateOperationsInput_1 = require("../inputs/NullableIntFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PostUpdateManyWithoutExperienceInput_1 = require("../inputs/PostUpdateManyWithoutExperienceInput");
const PriceUpdateManyWithoutExperienceInput_1 = require("../inputs/PriceUpdateManyWithoutExperienceInput");
const ReactionUpdateManyWithoutExperienceInput_1 = require("../inputs/ReactionUpdateManyWithoutExperienceInput");
const TenantUpdateOneRequiredWithoutExperiencesInput_1 = require("../inputs/TenantUpdateOneRequiredWithoutExperiencesInput");
let ExperienceUpdateWithoutLikedByInput = class ExperienceUpdateWithoutLikedByInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateOneRequiredWithoutExperiencesInput_1.TenantUpdateOneRequiredWithoutExperiencesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpdateOneRequiredWithoutExperiencesInput_1.TenantUpdateOneRequiredWithoutExperiencesInput)
], ExperienceUpdateWithoutLikedByInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ExperienceUpdateWithoutLikedByInput.prototype, "productLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ExperienceUpdateWithoutLikedByInput.prototype, "stripeProductId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ExperienceUpdateWithoutLikedByInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ExperienceUpdateWithoutLikedByInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableEnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput_1.NullableEnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableEnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput_1.NullableEnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput)
], ExperienceUpdateWithoutLikedByInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityUpdateManyWithoutExperienceInput_1.ExperienceAvailabilityUpdateManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityUpdateManyWithoutExperienceInput_1.ExperienceAvailabilityUpdateManyWithoutExperienceInput)
], ExperienceUpdateWithoutLikedByInput.prototype, "Availability", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderUpdateManyWithoutExperienceInput_1.BookingOrderUpdateManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderUpdateManyWithoutExperienceInput_1.BookingOrderUpdateManyWithoutExperienceInput)
], ExperienceUpdateWithoutLikedByInput.prototype, "Bookings", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ExperienceUpdateWithoutLikedByInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdategalleryInput_1.ExperienceUpdategalleryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceUpdategalleryInput_1.ExperienceUpdategalleryInput)
], ExperienceUpdateWithoutLikedByInput.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], ExperienceUpdateWithoutLikedByInput.prototype, "duration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingUpdateOneWithoutExperienceInput_1.AggregateRatingUpdateOneWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingUpdateOneWithoutExperienceInput_1.AggregateRatingUpdateOneWithoutExperienceInput)
], ExperienceUpdateWithoutLikedByInput.prototype, "AggregateRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPUBLISH_STATUSFieldUpdateOperationsInput_1.EnumPUBLISH_STATUSFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPUBLISH_STATUSFieldUpdateOperationsInput_1.EnumPUBLISH_STATUSFieldUpdateOperationsInput)
], ExperienceUpdateWithoutLikedByInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdatelikedByIdsInput_1.ExperienceUpdatelikedByIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceUpdatelikedByIdsInput_1.ExperienceUpdatelikedByIdsInput)
], ExperienceUpdateWithoutLikedByInput.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationUpdateManyWithoutExperienceInput_1.LocationUpdateManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationUpdateManyWithoutExperienceInput_1.LocationUpdateManyWithoutExperienceInput)
], ExperienceUpdateWithoutLikedByInput.prototype, "Locations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpdateManyWithoutExperienceInput_1.PriceUpdateManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceUpdateManyWithoutExperienceInput_1.PriceUpdateManyWithoutExperienceInput)
], ExperienceUpdateWithoutLikedByInput.prototype, "Price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateManyWithoutExperienceInput_1.PostUpdateManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateManyWithoutExperienceInput_1.PostUpdateManyWithoutExperienceInput)
], ExperienceUpdateWithoutLikedByInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesUpdateManyWithoutExperienceInput_1.FeaturesUpdateManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesUpdateManyWithoutExperienceInput_1.FeaturesUpdateManyWithoutExperienceInput)
], ExperienceUpdateWithoutLikedByInput.prototype, "Features", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateManyWithoutExperienceInput_1.ReactionUpdateManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionUpdateManyWithoutExperienceInput_1.ReactionUpdateManyWithoutExperienceInput)
], ExperienceUpdateWithoutLikedByInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ExperienceUpdateWithoutLikedByInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ExperienceUpdateWithoutLikedByInput.prototype, "updatedAt", void 0);
ExperienceUpdateWithoutLikedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceUpdateWithoutLikedByInput", {
        isAbstract: true
    })
], ExperienceUpdateWithoutLikedByInput);
exports.ExperienceUpdateWithoutLikedByInput = ExperienceUpdateWithoutLikedByInput;
