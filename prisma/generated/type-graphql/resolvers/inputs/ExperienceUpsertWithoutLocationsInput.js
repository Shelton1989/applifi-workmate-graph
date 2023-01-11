"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceUpsertWithoutLocationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateWithoutLocationsInput_1 = require("../inputs/ExperienceCreateWithoutLocationsInput");
const ExperienceUpdateWithoutLocationsInput_1 = require("../inputs/ExperienceUpdateWithoutLocationsInput");
let ExperienceUpsertWithoutLocationsInput = class ExperienceUpsertWithoutLocationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdateWithoutLocationsInput_1.ExperienceUpdateWithoutLocationsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceUpdateWithoutLocationsInput_1.ExperienceUpdateWithoutLocationsInput)
], ExperienceUpsertWithoutLocationsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutLocationsInput_1.ExperienceCreateWithoutLocationsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutLocationsInput_1.ExperienceCreateWithoutLocationsInput)
], ExperienceUpsertWithoutLocationsInput.prototype, "create", void 0);
ExperienceUpsertWithoutLocationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceUpsertWithoutLocationsInput", {
        isAbstract: true
    })
], ExperienceUpsertWithoutLocationsInput);
exports.ExperienceUpsertWithoutLocationsInput = ExperienceUpsertWithoutLocationsInput;
