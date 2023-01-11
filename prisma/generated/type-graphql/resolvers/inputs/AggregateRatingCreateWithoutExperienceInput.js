"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingCreateWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AggregateRatingCreateWithoutExperienceInput = class AggregateRatingCreateWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingCreateWithoutExperienceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRatingCreateWithoutExperienceInput.prototype, "ratingValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRatingCreateWithoutExperienceInput.prototype, "countedPosts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRatingCreateWithoutExperienceInput.prototype, "allPosts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRatingCreateWithoutExperienceInput.prototype, "ratingCount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AggregateRatingCreateWithoutExperienceInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AggregateRatingCreateWithoutExperienceInput.prototype, "updatedAt", void 0);
AggregateRatingCreateWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AggregateRatingCreateWithoutExperienceInput", {
        isAbstract: true
    })
], AggregateRatingCreateWithoutExperienceInput);
exports.AggregateRatingCreateWithoutExperienceInput = AggregateRatingCreateWithoutExperienceInput;
