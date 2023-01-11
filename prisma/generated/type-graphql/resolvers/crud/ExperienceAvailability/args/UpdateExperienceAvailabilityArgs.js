"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateExperienceAvailabilityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceAvailabilityUpdateInput_1 = require("../../../inputs/ExperienceAvailabilityUpdateInput");
const ExperienceAvailabilityWhereUniqueInput_1 = require("../../../inputs/ExperienceAvailabilityWhereUniqueInput");
let UpdateExperienceAvailabilityArgs = class UpdateExperienceAvailabilityArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityUpdateInput_1.ExperienceAvailabilityUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityUpdateInput_1.ExperienceAvailabilityUpdateInput)
], UpdateExperienceAvailabilityArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityWhereUniqueInput_1.ExperienceAvailabilityWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityWhereUniqueInput_1.ExperienceAvailabilityWhereUniqueInput)
], UpdateExperienceAvailabilityArgs.prototype, "where", void 0);
UpdateExperienceAvailabilityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateExperienceAvailabilityArgs);
exports.UpdateExperienceAvailabilityArgs = UpdateExperienceAvailabilityArgs;
