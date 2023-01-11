"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceUpsertWithoutAvailabilityInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateWithoutAvailabilityInput_1 = require("../inputs/ExperienceCreateWithoutAvailabilityInput");
const ExperienceUpdateWithoutAvailabilityInput_1 = require("../inputs/ExperienceUpdateWithoutAvailabilityInput");
let ExperienceUpsertWithoutAvailabilityInput = class ExperienceUpsertWithoutAvailabilityInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdateWithoutAvailabilityInput_1.ExperienceUpdateWithoutAvailabilityInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceUpdateWithoutAvailabilityInput_1.ExperienceUpdateWithoutAvailabilityInput)
], ExperienceUpsertWithoutAvailabilityInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutAvailabilityInput_1.ExperienceCreateWithoutAvailabilityInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutAvailabilityInput_1.ExperienceCreateWithoutAvailabilityInput)
], ExperienceUpsertWithoutAvailabilityInput.prototype, "create", void 0);
ExperienceUpsertWithoutAvailabilityInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceUpsertWithoutAvailabilityInput", {
        isAbstract: true
    })
], ExperienceUpsertWithoutAvailabilityInput);
exports.ExperienceUpsertWithoutAvailabilityInput = ExperienceUpsertWithoutAvailabilityInput;
