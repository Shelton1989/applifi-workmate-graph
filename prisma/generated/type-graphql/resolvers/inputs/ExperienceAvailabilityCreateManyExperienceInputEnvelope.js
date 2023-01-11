"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceAvailabilityCreateManyExperienceInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceAvailabilityCreateManyExperienceInput_1 = require("../inputs/ExperienceAvailabilityCreateManyExperienceInput");
let ExperienceAvailabilityCreateManyExperienceInputEnvelope = class ExperienceAvailabilityCreateManyExperienceInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceAvailabilityCreateManyExperienceInput_1.ExperienceAvailabilityCreateManyExperienceInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceAvailabilityCreateManyExperienceInputEnvelope.prototype, "data", void 0);
ExperienceAvailabilityCreateManyExperienceInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceAvailabilityCreateManyExperienceInputEnvelope", {
        isAbstract: true
    })
], ExperienceAvailabilityCreateManyExperienceInputEnvelope);
exports.ExperienceAvailabilityCreateManyExperienceInputEnvelope = ExperienceAvailabilityCreateManyExperienceInputEnvelope;
