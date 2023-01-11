"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertExperienceAvailabilityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceAvailabilityCreateInput_1 = require("../../../inputs/ExperienceAvailabilityCreateInput");
const ExperienceAvailabilityUpdateInput_1 = require("../../../inputs/ExperienceAvailabilityUpdateInput");
const ExperienceAvailabilityWhereUniqueInput_1 = require("../../../inputs/ExperienceAvailabilityWhereUniqueInput");
let UpsertExperienceAvailabilityArgs = class UpsertExperienceAvailabilityArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityWhereUniqueInput_1.ExperienceAvailabilityWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityWhereUniqueInput_1.ExperienceAvailabilityWhereUniqueInput)
], UpsertExperienceAvailabilityArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityCreateInput_1.ExperienceAvailabilityCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityCreateInput_1.ExperienceAvailabilityCreateInput)
], UpsertExperienceAvailabilityArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityUpdateInput_1.ExperienceAvailabilityUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityUpdateInput_1.ExperienceAvailabilityUpdateInput)
], UpsertExperienceAvailabilityArgs.prototype, "update", void 0);
UpsertExperienceAvailabilityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertExperienceAvailabilityArgs);
exports.UpsertExperienceAvailabilityArgs = UpsertExperienceAvailabilityArgs;
