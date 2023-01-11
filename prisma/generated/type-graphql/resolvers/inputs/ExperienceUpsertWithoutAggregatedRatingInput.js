"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceUpsertWithoutAggregatedRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateWithoutAggregatedRatingInput_1 = require("../inputs/ExperienceCreateWithoutAggregatedRatingInput");
const ExperienceUpdateWithoutAggregatedRatingInput_1 = require("../inputs/ExperienceUpdateWithoutAggregatedRatingInput");
let ExperienceUpsertWithoutAggregatedRatingInput = class ExperienceUpsertWithoutAggregatedRatingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdateWithoutAggregatedRatingInput_1.ExperienceUpdateWithoutAggregatedRatingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceUpdateWithoutAggregatedRatingInput_1.ExperienceUpdateWithoutAggregatedRatingInput)
], ExperienceUpsertWithoutAggregatedRatingInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutAggregatedRatingInput_1.ExperienceCreateWithoutAggregatedRatingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutAggregatedRatingInput_1.ExperienceCreateWithoutAggregatedRatingInput)
], ExperienceUpsertWithoutAggregatedRatingInput.prototype, "create", void 0);
ExperienceUpsertWithoutAggregatedRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceUpsertWithoutAggregatedRatingInput", {
        isAbstract: true
    })
], ExperienceUpsertWithoutAggregatedRatingInput);
exports.ExperienceUpsertWithoutAggregatedRatingInput = ExperienceUpsertWithoutAggregatedRatingInput;
