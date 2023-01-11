"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueExperienceAvailabilityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceAvailabilityWhereUniqueInput_1 = require("../../../inputs/ExperienceAvailabilityWhereUniqueInput");
let FindUniqueExperienceAvailabilityArgs = class FindUniqueExperienceAvailabilityArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityWhereUniqueInput_1.ExperienceAvailabilityWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityWhereUniqueInput_1.ExperienceAvailabilityWhereUniqueInput)
], FindUniqueExperienceAvailabilityArgs.prototype, "where", void 0);
FindUniqueExperienceAvailabilityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueExperienceAvailabilityArgs);
exports.FindUniqueExperienceAvailabilityArgs = FindUniqueExperienceAvailabilityArgs;
