"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceUpsertWithoutFeaturesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateWithoutFeaturesInput_1 = require("../inputs/ExperienceCreateWithoutFeaturesInput");
const ExperienceUpdateWithoutFeaturesInput_1 = require("../inputs/ExperienceUpdateWithoutFeaturesInput");
let ExperienceUpsertWithoutFeaturesInput = class ExperienceUpsertWithoutFeaturesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdateWithoutFeaturesInput_1.ExperienceUpdateWithoutFeaturesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceUpdateWithoutFeaturesInput_1.ExperienceUpdateWithoutFeaturesInput)
], ExperienceUpsertWithoutFeaturesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutFeaturesInput_1.ExperienceCreateWithoutFeaturesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutFeaturesInput_1.ExperienceCreateWithoutFeaturesInput)
], ExperienceUpsertWithoutFeaturesInput.prototype, "create", void 0);
ExperienceUpsertWithoutFeaturesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceUpsertWithoutFeaturesInput", {
        isAbstract: true
    })
], ExperienceUpsertWithoutFeaturesInput);
exports.ExperienceUpsertWithoutFeaturesInput = ExperienceUpsertWithoutFeaturesInput;
