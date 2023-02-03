"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceCreateWithoutFeaturesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingCreateNestedOneWithoutExperienceInput_1 = require("../inputs/AggregateRatingCreateNestedOneWithoutExperienceInput");
const BookingOrderCreateNestedManyWithoutExperienceInput_1 = require("../inputs/BookingOrderCreateNestedManyWithoutExperienceInput");
const ExperienceAvailabilityCreateNestedManyWithoutExperienceInput_1 = require("../inputs/ExperienceAvailabilityCreateNestedManyWithoutExperienceInput");
const ExperienceCreategalleryInput_1 = require("../inputs/ExperienceCreategalleryInput");
const ExperienceCreatelikedByIdsInput_1 = require("../inputs/ExperienceCreatelikedByIdsInput");
const LocationCreateNestedManyWithoutExperienceInput_1 = require("../inputs/LocationCreateNestedManyWithoutExperienceInput");
const PostCreateNestedManyWithoutExperienceInput_1 = require("../inputs/PostCreateNestedManyWithoutExperienceInput");
const PriceCreateNestedManyWithoutExperienceInput_1 = require("../inputs/PriceCreateNestedManyWithoutExperienceInput");
const ReactionCreateNestedManyWithoutExperienceInput_1 = require("../inputs/ReactionCreateNestedManyWithoutExperienceInput");
const TenantCreateNestedOneWithoutExperiencesInput_1 = require("../inputs/TenantCreateNestedOneWithoutExperiencesInput");
const UserCreateNestedManyWithoutLikedExperiencesInput_1 = require("../inputs/UserCreateNestedManyWithoutLikedExperiencesInput");
const EXPERIENCE_CATEGORY_1 = require("../../enums/EXPERIENCE_CATEGORY");
const PUBLISH_STATUS_1 = require("../../enums/PUBLISH_STATUS");
let ExperienceCreateWithoutFeaturesInput = class ExperienceCreateWithoutFeaturesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutFeaturesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateNestedOneWithoutExperiencesInput_1.TenantCreateNestedOneWithoutExperiencesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateNestedOneWithoutExperiencesInput_1.TenantCreateNestedOneWithoutExperiencesInput)
], ExperienceCreateWithoutFeaturesInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutFeaturesInput.prototype, "productLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutFeaturesInput.prototype, "stripeProductId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutFeaturesInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutFeaturesInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EXPERIENCE_CATEGORY_1.EXPERIENCE_CATEGORY, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutFeaturesInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityCreateNestedManyWithoutExperienceInput_1.ExperienceAvailabilityCreateNestedManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityCreateNestedManyWithoutExperienceInput_1.ExperienceAvailabilityCreateNestedManyWithoutExperienceInput)
], ExperienceCreateWithoutFeaturesInput.prototype, "Availability", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCreateNestedManyWithoutExperienceInput_1.BookingOrderCreateNestedManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderCreateNestedManyWithoutExperienceInput_1.BookingOrderCreateNestedManyWithoutExperienceInput)
], ExperienceCreateWithoutFeaturesInput.prototype, "Bookings", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutFeaturesInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreategalleryInput_1.ExperienceCreategalleryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreategalleryInput_1.ExperienceCreategalleryInput)
], ExperienceCreateWithoutFeaturesInput.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ExperienceCreateWithoutFeaturesInput.prototype, "duration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateNestedOneWithoutExperienceInput_1.AggregateRatingCreateNestedOneWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateNestedOneWithoutExperienceInput_1.AggregateRatingCreateNestedOneWithoutExperienceInput)
], ExperienceCreateWithoutFeaturesInput.prototype, "AggregateRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PUBLISH_STATUS_1.PUBLISH_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceCreateWithoutFeaturesInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutLikedExperiencesInput_1.UserCreateNestedManyWithoutLikedExperiencesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedManyWithoutLikedExperiencesInput_1.UserCreateNestedManyWithoutLikedExperiencesInput)
], ExperienceCreateWithoutFeaturesInput.prototype, "LikedBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreatelikedByIdsInput_1.ExperienceCreatelikedByIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreatelikedByIdsInput_1.ExperienceCreatelikedByIdsInput)
], ExperienceCreateWithoutFeaturesInput.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationCreateNestedManyWithoutExperienceInput_1.LocationCreateNestedManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LocationCreateNestedManyWithoutExperienceInput_1.LocationCreateNestedManyWithoutExperienceInput)
], ExperienceCreateWithoutFeaturesInput.prototype, "Locations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateNestedManyWithoutExperienceInput_1.PriceCreateNestedManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceCreateNestedManyWithoutExperienceInput_1.PriceCreateNestedManyWithoutExperienceInput)
], ExperienceCreateWithoutFeaturesInput.prototype, "Price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutExperienceInput_1.PostCreateNestedManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateNestedManyWithoutExperienceInput_1.PostCreateNestedManyWithoutExperienceInput)
], ExperienceCreateWithoutFeaturesInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateNestedManyWithoutExperienceInput_1.ReactionCreateNestedManyWithoutExperienceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateNestedManyWithoutExperienceInput_1.ReactionCreateNestedManyWithoutExperienceInput)
], ExperienceCreateWithoutFeaturesInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ExperienceCreateWithoutFeaturesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ExperienceCreateWithoutFeaturesInput.prototype, "updatedAt", void 0);
ExperienceCreateWithoutFeaturesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceCreateWithoutFeaturesInput", {
        isAbstract: true
    })
], ExperienceCreateWithoutFeaturesInput);
exports.ExperienceCreateWithoutFeaturesInput = ExperienceCreateWithoutFeaturesInput;
