"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateExperienceAvailabilityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceAvailabilityOrderByWithRelationInput_1 = require("../../../inputs/ExperienceAvailabilityOrderByWithRelationInput");
const ExperienceAvailabilityWhereInput_1 = require("../../../inputs/ExperienceAvailabilityWhereInput");
const ExperienceAvailabilityWhereUniqueInput_1 = require("../../../inputs/ExperienceAvailabilityWhereUniqueInput");
let AggregateExperienceAvailabilityArgs = class AggregateExperienceAvailabilityArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityWhereInput_1.ExperienceAvailabilityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityWhereInput_1.ExperienceAvailabilityWhereInput)
], AggregateExperienceAvailabilityArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceAvailabilityOrderByWithRelationInput_1.ExperienceAvailabilityOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateExperienceAvailabilityArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityWhereUniqueInput_1.ExperienceAvailabilityWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityWhereUniqueInput_1.ExperienceAvailabilityWhereUniqueInput)
], AggregateExperienceAvailabilityArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateExperienceAvailabilityArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateExperienceAvailabilityArgs.prototype, "skip", void 0);
AggregateExperienceAvailabilityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateExperienceAvailabilityArgs);
exports.AggregateExperienceAvailabilityArgs = AggregateExperienceAvailabilityArgs;
