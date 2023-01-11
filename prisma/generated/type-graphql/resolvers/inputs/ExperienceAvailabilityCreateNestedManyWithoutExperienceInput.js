"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceAvailabilityCreateNestedManyWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceAvailabilityCreateManyExperienceInputEnvelope_1 = require("../inputs/ExperienceAvailabilityCreateManyExperienceInputEnvelope");
const ExperienceAvailabilityCreateOrConnectWithoutExperienceInput_1 = require("../inputs/ExperienceAvailabilityCreateOrConnectWithoutExperienceInput");
const ExperienceAvailabilityCreateWithoutExperienceInput_1 = require("../inputs/ExperienceAvailabilityCreateWithoutExperienceInput");
const ExperienceAvailabilityWhereUniqueInput_1 = require("../inputs/ExperienceAvailabilityWhereUniqueInput");
let ExperienceAvailabilityCreateNestedManyWithoutExperienceInput = class ExperienceAvailabilityCreateNestedManyWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceAvailabilityCreateWithoutExperienceInput_1.ExperienceAvailabilityCreateWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceAvailabilityCreateNestedManyWithoutExperienceInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceAvailabilityCreateOrConnectWithoutExperienceInput_1.ExperienceAvailabilityCreateOrConnectWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceAvailabilityCreateNestedManyWithoutExperienceInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityCreateManyExperienceInputEnvelope_1.ExperienceAvailabilityCreateManyExperienceInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityCreateManyExperienceInputEnvelope_1.ExperienceAvailabilityCreateManyExperienceInputEnvelope)
], ExperienceAvailabilityCreateNestedManyWithoutExperienceInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceAvailabilityWhereUniqueInput_1.ExperienceAvailabilityWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceAvailabilityCreateNestedManyWithoutExperienceInput.prototype, "connect", void 0);
ExperienceAvailabilityCreateNestedManyWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceAvailabilityCreateNestedManyWithoutExperienceInput", {
        isAbstract: true
    })
], ExperienceAvailabilityCreateNestedManyWithoutExperienceInput);
exports.ExperienceAvailabilityCreateNestedManyWithoutExperienceInput = ExperienceAvailabilityCreateNestedManyWithoutExperienceInput;
