"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceUpdateWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingUpdateOneWithoutExperienceInput_1 = require("../inputs/AggregateRatingUpdateOneWithoutExperienceInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput_1 = require("../inputs/EnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput");
const EnumPUBLISH_STATUSFieldUpdateOperationsInput_1 = require("../inputs/EnumPUBLISH_STATUSFieldUpdateOperationsInput");
const ExperienceAvailabilityUpdateManyWithoutExperienceInput_1 = require("../inputs/ExperienceAvailabilityUpdateManyWithoutExperienceInput");
const ExperienceUpdategalleryInput_1 = require("../inputs/ExperienceUpdategalleryInput");
const ExperienceUpdatelikedByIdsInput_1 = require("../inputs/ExperienceUpdatelikedByIdsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const LocationUpdateManyWithoutExperienceInput_1 = require("../inputs/LocationUpdateManyWithoutExperienceInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PriceUpdateManyWithoutExperienceInput_1 = require("../inputs/PriceUpdateManyWithoutExperienceInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TenantUpdateOneRequiredWithoutExperiencesInput_1 = require("../inputs/TenantUpdateOneRequiredWithoutExperiencesInput");
const UserUpdateManyWithoutLikedExperiencesInput_1 = require("../inputs/UserUpdateManyWithoutLikedExperiencesInput");
let ExperienceUpdateWithoutPostsInput = class ExperienceUpdateWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateOneRequiredWithoutExperiencesInput_1.TenantUpdateOneRequiredWithoutExperiencesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpdateOneRequiredWithoutExperiencesInput_1.TenantUpdateOneRequiredWithoutExperiencesInput)
], ExperienceUpdateWithoutPostsInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ExperienceUpdateWithoutPostsInput.prototype, "productLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ExperienceUpdateWithoutPostsInput.prototype, "stripeProductId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ExperienceUpdateWithoutPostsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ExperienceUpdateWithoutPostsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput_1.EnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput_1.EnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput)
], ExperienceUpdateWithoutPostsInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityUpdateManyWithoutExperienceInput_1.ExperienceAvailabilityUpdateManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityUpdateManyWithoutExperienceInput_1.ExperienceAvailabilityUpdateManyWithoutExperienceInput)
], ExperienceUpdateWithoutPostsInput.prototype, "Availability", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ExperienceUpdateWithoutPostsInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdategalleryInput_1.ExperienceUpdategalleryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceUpdategalleryInput_1.ExperienceUpdategalleryInput)
], ExperienceUpdateWithoutPostsInput.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ExperienceUpdateWithoutPostsInput.prototype, "location", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], ExperienceUpdateWithoutPostsInput.prototype, "duration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingUpdateOneWithoutExperienceInput_1.AggregateRatingUpdateOneWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingUpdateOneWithoutExperienceInput_1.AggregateRatingUpdateOneWithoutExperienceInput)
], ExperienceUpdateWithoutPostsInput.prototype, "AggregatedRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPUBLISH_STATUSFieldUpdateOperationsInput_1.EnumPUBLISH_STATUSFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPUBLISH_STATUSFieldUpdateOperationsInput_1.EnumPUBLISH_STATUSFieldUpdateOperationsInput)
], ExperienceUpdateWithoutPostsInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateManyWithoutLikedExperiencesInput_1.UserUpdateManyWithoutLikedExperiencesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateManyWithoutLikedExperiencesInput_1.UserUpdateManyWithoutLikedExperiencesInput)
], ExperienceUpdateWithoutPostsInput.prototype, "LikedBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdatelikedByIdsInput_1.ExperienceUpdatelikedByIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceUpdatelikedByIdsInput_1.ExperienceUpdatelikedByIdsInput)
], ExperienceUpdateWithoutPostsInput.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationUpdateManyWithoutExperienceInput_1.LocationUpdateManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationUpdateManyWithoutExperienceInput_1.LocationUpdateManyWithoutExperienceInput)
], ExperienceUpdateWithoutPostsInput.prototype, "Locations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpdateManyWithoutExperienceInput_1.PriceUpdateManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceUpdateManyWithoutExperienceInput_1.PriceUpdateManyWithoutExperienceInput)
], ExperienceUpdateWithoutPostsInput.prototype, "Price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ExperienceUpdateWithoutPostsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ExperienceUpdateWithoutPostsInput.prototype, "updatedAt", void 0);
ExperienceUpdateWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceUpdateWithoutPostsInput", {
        isAbstract: true
    })
], ExperienceUpdateWithoutPostsInput);
exports.ExperienceUpdateWithoutPostsInput = ExperienceUpdateWithoutPostsInput;
