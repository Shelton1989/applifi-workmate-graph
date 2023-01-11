"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteExperienceAvailabilityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceAvailabilityWhereUniqueInput_1 = require("../../../inputs/ExperienceAvailabilityWhereUniqueInput");
let DeleteExperienceAvailabilityArgs = class DeleteExperienceAvailabilityArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityWhereUniqueInput_1.ExperienceAvailabilityWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityWhereUniqueInput_1.ExperienceAvailabilityWhereUniqueInput)
], DeleteExperienceAvailabilityArgs.prototype, "where", void 0);
DeleteExperienceAvailabilityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteExperienceAvailabilityArgs);
exports.DeleteExperienceAvailabilityArgs = DeleteExperienceAvailabilityArgs;
