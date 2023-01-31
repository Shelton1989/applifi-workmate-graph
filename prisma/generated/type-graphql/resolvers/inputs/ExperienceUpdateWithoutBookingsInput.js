"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceUpdateWithoutBookingsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingUpdateOneWithoutExperienceInput_1 = require("../inputs/AggregateRatingUpdateOneWithoutExperienceInput");
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
const TenantUpdateOneRequiredWithoutExperiencesInput_1 = require("../inputs/TenantUpdateOneRequiredWithoutExperiencesInput");
const UserUpdateManyWithoutLikedExperiencesInput_1 = require("../inputs/UserUpdateManyWithoutLikedExperiencesInput");
let ExperienceUpdateWithoutBookingsInput = class ExperienceUpdateWithoutBookingsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateOneRequiredWithoutExperiencesInput_1.TenantUpdateOneRequiredWithoutExperiencesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpdateOneRequiredWithoutExperiencesInput_1.TenantUpdateOneRequiredWithoutExperiencesInput)
], ExperienceUpdateWithoutBookingsInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ExperienceUpdateWithoutBookingsInput.prototype, "productLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ExperienceUpdateWithoutBookingsInput.prototype, "stripeProductId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ExperienceUpdateWithoutBookingsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ExperienceUpdateWithoutBookingsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableEnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput_1.NullableEnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableEnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput_1.NullableEnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput)
], ExperienceUpdateWithoutBookingsInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityUpdateManyWithoutExperienceInput_1.ExperienceAvailabilityUpdateManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityUpdateManyWithoutExperienceInput_1.ExperienceAvailabilityUpdateManyWithoutExperienceInput)
], ExperienceUpdateWithoutBookingsInput.prototype, "Availability", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ExperienceUpdateWithoutBookingsInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdategalleryInput_1.ExperienceUpdategalleryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceUpdategalleryInput_1.ExperienceUpdategalleryInput)
], ExperienceUpdateWithoutBookingsInput.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], ExperienceUpdateWithoutBookingsInput.prototype, "duration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingUpdateOneWithoutExperienceInput_1.AggregateRatingUpdateOneWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingUpdateOneWithoutExperienceInput_1.AggregateRatingUpdateOneWithoutExperienceInput)
], ExperienceUpdateWithoutBookingsInput.prototype, "AggregateRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPUBLISH_STATUSFieldUpdateOperationsInput_1.EnumPUBLISH_STATUSFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPUBLISH_STATUSFieldUpdateOperationsInput_1.EnumPUBLISH_STATUSFieldUpdateOperationsInput)
], ExperienceUpdateWithoutBookingsInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateManyWithoutLikedExperiencesInput_1.UserUpdateManyWithoutLikedExperiencesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateManyWithoutLikedExperiencesInput_1.UserUpdateManyWithoutLikedExperiencesInput)
], ExperienceUpdateWithoutBookingsInput.prototype, "LikedBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdatelikedByIdsInput_1.ExperienceUpdatelikedByIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceUpdatelikedByIdsInput_1.ExperienceUpdatelikedByIdsInput)
], ExperienceUpdateWithoutBookingsInput.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationUpdateManyWithoutExperienceInput_1.LocationUpdateManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationUpdateManyWithoutExperienceInput_1.LocationUpdateManyWithoutExperienceInput)
], ExperienceUpdateWithoutBookingsInput.prototype, "Locations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpdateManyWithoutExperienceInput_1.PriceUpdateManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceUpdateManyWithoutExperienceInput_1.PriceUpdateManyWithoutExperienceInput)
], ExperienceUpdateWithoutBookingsInput.prototype, "Price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateManyWithoutExperienceInput_1.PostUpdateManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateManyWithoutExperienceInput_1.PostUpdateManyWithoutExperienceInput)
], ExperienceUpdateWithoutBookingsInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesUpdateManyWithoutExperienceInput_1.FeaturesUpdateManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesUpdateManyWithoutExperienceInput_1.FeaturesUpdateManyWithoutExperienceInput)
], ExperienceUpdateWithoutBookingsInput.prototype, "Features", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ExperienceUpdateWithoutBookingsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ExperienceUpdateWithoutBookingsInput.prototype, "updatedAt", void 0);
ExperienceUpdateWithoutBookingsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceUpdateWithoutBookingsInput", {
        isAbstract: true
    })
], ExperienceUpdateWithoutBookingsInput);
exports.ExperienceUpdateWithoutBookingsInput = ExperienceUpdateWithoutBookingsInput;
