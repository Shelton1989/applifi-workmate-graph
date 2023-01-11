"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceAvailabilityUpdateWithWhereUniqueWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceAvailabilityUpdateWithoutExperienceInput_1 = require("../inputs/ExperienceAvailabilityUpdateWithoutExperienceInput");
const ExperienceAvailabilityWhereUniqueInput_1 = require("../inputs/ExperienceAvailabilityWhereUniqueInput");
let ExperienceAvailabilityUpdateWithWhereUniqueWithoutExperienceInput = class ExperienceAvailabilityUpdateWithWhereUniqueWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityWhereUniqueInput_1.ExperienceAvailabilityWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityWhereUniqueInput_1.ExperienceAvailabilityWhereUniqueInput)
], ExperienceAvailabilityUpdateWithWhereUniqueWithoutExperienceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityUpdateWithoutExperienceInput_1.ExperienceAvailabilityUpdateWithoutExperienceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityUpdateWithoutExperienceInput_1.ExperienceAvailabilityUpdateWithoutExperienceInput)
], ExperienceAvailabilityUpdateWithWhereUniqueWithoutExperienceInput.prototype, "data", void 0);
ExperienceAvailabilityUpdateWithWhereUniqueWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceAvailabilityUpdateWithWhereUniqueWithoutExperienceInput", {
        isAbstract: true
    })
], ExperienceAvailabilityUpdateWithWhereUniqueWithoutExperienceInput);
exports.ExperienceAvailabilityUpdateWithWhereUniqueWithoutExperienceInput = ExperienceAvailabilityUpdateWithWhereUniqueWithoutExperienceInput;
