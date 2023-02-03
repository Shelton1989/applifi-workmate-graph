"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceCreateWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingCreateNestedOneWithoutExperienceInput_1 = require("../inputs/AggregateRatingCreateNestedOneWithoutExperienceInput");
const BookingOrderCreateNestedManyWithoutExperienceInput_1 = require("../inputs/BookingOrderCreateNestedManyWithoutExperienceInput");
const ExperienceAvailabilityCreateNestedManyWithoutExperienceInput_1 = require("../inputs/ExperienceAvailabilityCreateNestedManyWithoutExperienceInput");
const ExperienceCreategalleryInput_1 = require("../inputs/ExperienceCreategalleryInput");
const ExperienceCreatelikedByIdsInput_1 = require("../inputs/ExperienceCreatelikedByIdsInput");
const FeaturesCreateNestedManyWithoutExperienceInput_1 = require("../inputs/FeaturesCreateNestedManyWithoutExperienceInput");
const LocationCreateNestedManyWithoutExperienceInput_1 = require("../inputs/LocationCreateNestedManyWithoutExperienceInput");
const PostCreateNestedManyWithoutExperienceInput_1 = require("../inputs/PostCreateNestedManyWithoutExperienceInput");
const PriceCreateNestedManyWithoutExperienceInput_1 = require("../inputs/PriceCreateNestedManyWithoutExperienceInput");
const ReactionCreateNestedManyWithoutExperienceInput_1 = require("../inputs/ReactionCreateNestedManyWithoutExperienceInput");
const UserCreateNestedManyWithoutLikedExperiencesInput_1 = require("../inputs/UserCreateNestedManyWithoutLikedExperiencesInput");
const EXPERIENCE_CATEGORY_1 = require("../../enums/EXPERIENCE_CATEGORY");
const PUBLISH_STATUS_1 = require("../../enums/PUBLISH_STATUS");
let ExperienceCreateWithoutTenantInput = class ExperienceCreateWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutTenantInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutTenantInput.prototype, "productLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutTenantInput.prototype, "stripeProductId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutTenantInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutTenantInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EXPERIENCE_CATEGORY_1.EXPERIENCE_CATEGORY, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutTenantInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityCreateNestedManyWithoutExperienceInput_1.ExperienceAvailabilityCreateNestedManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityCreateNestedManyWithoutExperienceInput_1.ExperienceAvailabilityCreateNestedManyWithoutExperienceInput)
], ExperienceCreateWithoutTenantInput.prototype, "Availability", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCreateNestedManyWithoutExperienceInput_1.BookingOrderCreateNestedManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderCreateNestedManyWithoutExperienceInput_1.BookingOrderCreateNestedManyWithoutExperienceInput)
], ExperienceCreateWithoutTenantInput.prototype, "Bookings", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutTenantInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreategalleryInput_1.ExperienceCreategalleryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreategalleryInput_1.ExperienceCreategalleryInput)
], ExperienceCreateWithoutTenantInput.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ExperienceCreateWithoutTenantInput.prototype, "duration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateNestedOneWithoutExperienceInput_1.AggregateRatingCreateNestedOneWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateNestedOneWithoutExperienceInput_1.AggregateRatingCreateNestedOneWithoutExperienceInput)
], ExperienceCreateWithoutTenantInput.prototype, "AggregateRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PUBLISH_STATUS_1.PUBLISH_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutTenantInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutLikedExperiencesInput_1.UserCreateNestedManyWithoutLikedExperiencesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedManyWithoutLikedExperiencesInput_1.UserCreateNestedManyWithoutLikedExperiencesInput)
], ExperienceCreateWithoutTenantInput.prototype, "LikedBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreatelikedByIdsInput_1.ExperienceCreatelikedByIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreatelikedByIdsInput_1.ExperienceCreatelikedByIdsInput)
], ExperienceCreateWithoutTenantInput.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCreateNestedManyWithoutExperienceInput_1.LocationCreateNestedManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationCreateNestedManyWithoutExperienceInput_1.LocationCreateNestedManyWithoutExperienceInput)
], ExperienceCreateWithoutTenantInput.prototype, "Locations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateNestedManyWithoutExperienceInput_1.PriceCreateNestedManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceCreateNestedManyWithoutExperienceInput_1.PriceCreateNestedManyWithoutExperienceInput)
], ExperienceCreateWithoutTenantInput.prototype, "Price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutExperienceInput_1.PostCreateNestedManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateNestedManyWithoutExperienceInput_1.PostCreateNestedManyWithoutExperienceInput)
], ExperienceCreateWithoutTenantInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesCreateNestedManyWithoutExperienceInput_1.FeaturesCreateNestedManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesCreateNestedManyWithoutExperienceInput_1.FeaturesCreateNestedManyWithoutExperienceInput)
], ExperienceCreateWithoutTenantInput.prototype, "Features", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateNestedManyWithoutExperienceInput_1.ReactionCreateNestedManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateNestedManyWithoutExperienceInput_1.ReactionCreateNestedManyWithoutExperienceInput)
], ExperienceCreateWithoutTenantInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ExperienceCreateWithoutTenantInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ExperienceCreateWithoutTenantInput.prototype, "updatedAt", void 0);
ExperienceCreateWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceCreateWithoutTenantInput", {
        isAbstract: true
    })
], ExperienceCreateWithoutTenantInput);
exports.ExperienceCreateWithoutTenantInput = ExperienceCreateWithoutTenantInput;
