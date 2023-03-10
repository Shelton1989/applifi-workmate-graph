"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingUpsertWithoutMealInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingCreateWithoutMealInput_1 = require("../inputs/AggregateRatingCreateWithoutMealInput");
const AggregateRatingUpdateWithoutMealInput_1 = require("../inputs/AggregateRatingUpdateWithoutMealInput");
let AggregateRatingUpsertWithoutMealInput = class AggregateRatingUpsertWithoutMealInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingUpdateWithoutMealInput_1.AggregateRatingUpdateWithoutMealInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AggregateRatingUpdateWithoutMealInput_1.AggregateRatingUpdateWithoutMealInput)
], AggregateRatingUpsertWithoutMealInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateWithoutMealInput_1.AggregateRatingCreateWithoutMealInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateWithoutMealInput_1.AggregateRatingCreateWithoutMealInput)
], AggregateRatingUpsertWithoutMealInput.prototype, "create", void 0);
AggregateRatingUpsertWithoutMealInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AggregateRatingUpsertWithoutMealInput", {
        isAbstract: true
    })
], AggregateRatingUpsertWithoutMealInput);
exports.AggregateRatingUpsertWithoutMealInput = AggregateRatingUpsertWithoutMealInput;
