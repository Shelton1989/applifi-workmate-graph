"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceCreateWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingCreateNestedOneWithoutExperienceInput_1 = require("../inputs/AggregateRatingCreateNestedOneWithoutExperienceInput");
const BookingOrderCreateNestedManyWithoutExperienceInput_1 = require("../inputs/BookingOrderCreateNestedManyWithoutExperienceInput");
const ExperienceAvailabilityCreateNestedManyWithoutExperienceInput_1 = require("../inputs/ExperienceAvailabilityCreateNestedManyWithoutExperienceInput");
const ExperienceCreategalleryInput_1 = require("../inputs/ExperienceCreategalleryInput");
const ExperienceCreatelikedByIdsInput_1 = require("../inputs/ExperienceCreatelikedByIdsInput");
const FeaturesCreateNestedManyWithoutExperienceInput_1 = require("../inputs/FeaturesCreateNestedManyWithoutExperienceInput");
const LocationCreateNestedManyWithoutExperienceInput_1 = require("../inputs/LocationCreateNestedManyWithoutExperienceInput");
const PriceCreateNestedManyWithoutExperienceInput_1 = require("../inputs/PriceCreateNestedManyWithoutExperienceInput");
const TenantCreateNestedOneWithoutExperiencesInput_1 = require("../inputs/TenantCreateNestedOneWithoutExperiencesInput");
const UserCreateNestedManyWithoutLikedExperiencesInput_1 = require("../inputs/UserCreateNestedManyWithoutLikedExperiencesInput");
const EXPERIENCE_CATEGORY_1 = require("../../enums/EXPERIENCE_CATEGORY");
const PUBLISH_STATUS_1 = require("../../enums/PUBLISH_STATUS");
let ExperienceCreateWithoutPostsInput = class ExperienceCreateWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutPostsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateNestedOneWithoutExperiencesInput_1.TenantCreateNestedOneWithoutExperiencesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateNestedOneWithoutExperiencesInput_1.TenantCreateNestedOneWithoutExperiencesInput)
], ExperienceCreateWithoutPostsInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutPostsInput.prototype, "productLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutPostsInput.prototype, "stripeProductId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutPostsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutPostsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EXPERIENCE_CATEGORY_1.EXPERIENCE_CATEGORY, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutPostsInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityCreateNestedManyWithoutExperienceInput_1.ExperienceAvailabilityCreateNestedManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityCreateNestedManyWithoutExperienceInput_1.ExperienceAvailabilityCreateNestedManyWithoutExperienceInput)
], ExperienceCreateWithoutPostsInput.prototype, "Availability", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCreateNestedManyWithoutExperienceInput_1.BookingOrderCreateNestedManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderCreateNestedManyWithoutExperienceInput_1.BookingOrderCreateNestedManyWithoutExperienceInput)
], ExperienceCreateWithoutPostsInput.prototype, "Bookings", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutPostsInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreategalleryInput_1.ExperienceCreategalleryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreategalleryInput_1.ExperienceCreategalleryInput)
], ExperienceCreateWithoutPostsInput.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ExperienceCreateWithoutPostsInput.prototype, "duration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateNestedOneWithoutExperienceInput_1.AggregateRatingCreateNestedOneWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateNestedOneWithoutExperienceInput_1.AggregateRatingCreateNestedOneWithoutExperienceInput)
], ExperienceCreateWithoutPostsInput.prototype, "AggregateRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PUBLISH_STATUS_1.PUBLISH_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutPostsInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutLikedExperiencesInput_1.UserCreateNestedManyWithoutLikedExperiencesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedManyWithoutLikedExperiencesInput_1.UserCreateNestedManyWithoutLikedExperiencesInput)
], ExperienceCreateWithoutPostsInput.prototype, "LikedBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreatelikedByIdsInput_1.ExperienceCreatelikedByIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreatelikedByIdsInput_1.ExperienceCreatelikedByIdsInput)
], ExperienceCreateWithoutPostsInput.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCreateNestedManyWithoutExperienceInput_1.LocationCreateNestedManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationCreateNestedManyWithoutExperienceInput_1.LocationCreateNestedManyWithoutExperienceInput)
], ExperienceCreateWithoutPostsInput.prototype, "Locations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateNestedManyWithoutExperienceInput_1.PriceCreateNestedManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceCreateNestedManyWithoutExperienceInput_1.PriceCreateNestedManyWithoutExperienceInput)
], ExperienceCreateWithoutPostsInput.prototype, "Price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesCreateNestedManyWithoutExperienceInput_1.FeaturesCreateNestedManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesCreateNestedManyWithoutExperienceInput_1.FeaturesCreateNestedManyWithoutExperienceInput)
], ExperienceCreateWithoutPostsInput.prototype, "Features", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ExperienceCreateWithoutPostsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ExperienceCreateWithoutPostsInput.prototype, "updatedAt", void 0);
ExperienceCreateWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceCreateWithoutPostsInput", {
        isAbstract: true
    })
], ExperienceCreateWithoutPostsInput);
exports.ExperienceCreateWithoutPostsInput = ExperienceCreateWithoutPostsInput;
