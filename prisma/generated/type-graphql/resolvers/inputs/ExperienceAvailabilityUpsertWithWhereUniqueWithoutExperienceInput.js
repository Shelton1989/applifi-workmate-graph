"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceAvailabilityUpsertWithWhereUniqueWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceAvailabilityCreateWithoutExperienceInput_1 = require("../inputs/ExperienceAvailabilityCreateWithoutExperienceInput");
const ExperienceAvailabilityUpdateWithoutExperienceInput_1 = require("../inputs/ExperienceAvailabilityUpdateWithoutExperienceInput");
const ExperienceAvailabilityWhereUniqueInput_1 = require("../inputs/ExperienceAvailabilityWhereUniqueInput");
let ExperienceAvailabilityUpsertWithWhereUniqueWithoutExperienceInput = class ExperienceAvailabilityUpsertWithWhereUniqueWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityWhereUniqueInput_1.ExperienceAvailabilityWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityWhereUniqueInput_1.ExperienceAvailabilityWhereUniqueInput)
], ExperienceAvailabilityUpsertWithWhereUniqueWithoutExperienceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityUpdateWithoutExperienceInput_1.ExperienceAvailabilityUpdateWithoutExperienceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityUpdateWithoutExperienceInput_1.ExperienceAvailabilityUpdateWithoutExperienceInput)
], ExperienceAvailabilityUpsertWithWhereUniqueWithoutExperienceInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityCreateWithoutExperienceInput_1.ExperienceAvailabilityCreateWithoutExperienceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityCreateWithoutExperienceInput_1.ExperienceAvailabilityCreateWithoutExperienceInput)
], ExperienceAvailabilityUpsertWithWhereUniqueWithoutExperienceInput.prototype, "create", void 0);
ExperienceAvailabilityUpsertWithWhereUniqueWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceAvailabilityUpsertWithWhereUniqueWithoutExperienceInput", {
        isAbstract: true
    })
], ExperienceAvailabilityUpsertWithWhereUniqueWithoutExperienceInput);
exports.ExperienceAvailabilityUpsertWithWhereUniqueWithoutExperienceInput = ExperienceAvailabilityUpsertWithWhereUniqueWithoutExperienceInput;
