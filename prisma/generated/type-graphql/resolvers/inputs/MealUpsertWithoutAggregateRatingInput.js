"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpsertWithoutAggregateRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateWithoutAggregateRatingInput_1 = require("../inputs/MealCreateWithoutAggregateRatingInput");
const MealUpdateWithoutAggregateRatingInput_1 = require("../inputs/MealUpdateWithoutAggregateRatingInput");
let MealUpsertWithoutAggregateRatingInput = class MealUpsertWithoutAggregateRatingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateWithoutAggregateRatingInput_1.MealUpdateWithoutAggregateRatingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealUpdateWithoutAggregateRatingInput_1.MealUpdateWithoutAggregateRatingInput)
], MealUpsertWithoutAggregateRatingInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateWithoutAggregateRatingInput_1.MealCreateWithoutAggregateRatingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealCreateWithoutAggregateRatingInput_1.MealCreateWithoutAggregateRatingInput)
], MealUpsertWithoutAggregateRatingInput.prototype, "create", void 0);
MealUpsertWithoutAggregateRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpsertWithoutAggregateRatingInput", {
        isAbstract: true
    })
], MealUpsertWithoutAggregateRatingInput);
exports.MealUpsertWithoutAggregateRatingInput = MealUpsertWithoutAggregateRatingInput;
