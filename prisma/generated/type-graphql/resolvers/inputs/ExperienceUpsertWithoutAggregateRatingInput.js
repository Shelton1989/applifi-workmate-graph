"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceUpsertWithoutAggregateRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateWithoutAggregateRatingInput_1 = require("../inputs/ExperienceCreateWithoutAggregateRatingInput");
const ExperienceUpdateWithoutAggregateRatingInput_1 = require("../inputs/ExperienceUpdateWithoutAggregateRatingInput");
let ExperienceUpsertWithoutAggregateRatingInput = class ExperienceUpsertWithoutAggregateRatingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdateWithoutAggregateRatingInput_1.ExperienceUpdateWithoutAggregateRatingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceUpdateWithoutAggregateRatingInput_1.ExperienceUpdateWithoutAggregateRatingInput)
], ExperienceUpsertWithoutAggregateRatingInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutAggregateRatingInput_1.ExperienceCreateWithoutAggregateRatingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutAggregateRatingInput_1.ExperienceCreateWithoutAggregateRatingInput)
], ExperienceUpsertWithoutAggregateRatingInput.prototype, "create", void 0);
ExperienceUpsertWithoutAggregateRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceUpsertWithoutAggregateRatingInput", {
        isAbstract: true
    })
], ExperienceUpsertWithoutAggregateRatingInput);
exports.ExperienceUpsertWithoutAggregateRatingInput = ExperienceUpsertWithoutAggregateRatingInput;
