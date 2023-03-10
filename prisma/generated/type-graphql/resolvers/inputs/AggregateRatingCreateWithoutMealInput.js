"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingCreateWithoutMealInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AggregateRatingCreateWithoutMealInput = class AggregateRatingCreateWithoutMealInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingCreateWithoutMealInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRatingCreateWithoutMealInput.prototype, "ratingValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRatingCreateWithoutMealInput.prototype, "countedPosts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRatingCreateWithoutMealInput.prototype, "allPosts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRatingCreateWithoutMealInput.prototype, "ratingCount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AggregateRatingCreateWithoutMealInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AggregateRatingCreateWithoutMealInput.prototype, "updatedAt", void 0);
AggregateRatingCreateWithoutMealInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AggregateRatingCreateWithoutMealInput", {
        isAbstract: true
    })
], AggregateRatingCreateWithoutMealInput);
exports.AggregateRatingCreateWithoutMealInput = AggregateRatingCreateWithoutMealInput;
