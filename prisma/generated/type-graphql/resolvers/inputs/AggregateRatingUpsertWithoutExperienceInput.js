"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingUpsertWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingCreateWithoutExperienceInput_1 = require("../inputs/AggregateRatingCreateWithoutExperienceInput");
const AggregateRatingUpdateWithoutExperienceInput_1 = require("../inputs/AggregateRatingUpdateWithoutExperienceInput");
let AggregateRatingUpsertWithoutExperienceInput = class AggregateRatingUpsertWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingUpdateWithoutExperienceInput_1.AggregateRatingUpdateWithoutExperienceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AggregateRatingUpdateWithoutExperienceInput_1.AggregateRatingUpdateWithoutExperienceInput)
], AggregateRatingUpsertWithoutExperienceInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateWithoutExperienceInput_1.AggregateRatingCreateWithoutExperienceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateWithoutExperienceInput_1.AggregateRatingCreateWithoutExperienceInput)
], AggregateRatingUpsertWithoutExperienceInput.prototype, "create", void 0);
AggregateRatingUpsertWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AggregateRatingUpsertWithoutExperienceInput", {
        isAbstract: true
    })
], AggregateRatingUpsertWithoutExperienceInput);
exports.AggregateRatingUpsertWithoutExperienceInput = AggregateRatingUpsertWithoutExperienceInput;
