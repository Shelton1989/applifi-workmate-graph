"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceAvailabilityUpdateManyWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceAvailabilityCreateManyExperienceInputEnvelope_1 = require("../inputs/ExperienceAvailabilityCreateManyExperienceInputEnvelope");
const ExperienceAvailabilityCreateOrConnectWithoutExperienceInput_1 = require("../inputs/ExperienceAvailabilityCreateOrConnectWithoutExperienceInput");
const ExperienceAvailabilityCreateWithoutExperienceInput_1 = require("../inputs/ExperienceAvailabilityCreateWithoutExperienceInput");
const ExperienceAvailabilityScalarWhereInput_1 = require("../inputs/ExperienceAvailabilityScalarWhereInput");
const ExperienceAvailabilityUpdateManyWithWhereWithoutExperienceInput_1 = require("../inputs/ExperienceAvailabilityUpdateManyWithWhereWithoutExperienceInput");
const ExperienceAvailabilityUpdateWithWhereUniqueWithoutExperienceInput_1 = require("../inputs/ExperienceAvailabilityUpdateWithWhereUniqueWithoutExperienceInput");
const ExperienceAvailabilityUpsertWithWhereUniqueWithoutExperienceInput_1 = require("../inputs/ExperienceAvailabilityUpsertWithWhereUniqueWithoutExperienceInput");
const ExperienceAvailabilityWhereUniqueInput_1 = require("../inputs/ExperienceAvailabilityWhereUniqueInput");
let ExperienceAvailabilityUpdateManyWithoutExperienceInput = class ExperienceAvailabilityUpdateManyWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceAvailabilityCreateWithoutExperienceInput_1.ExperienceAvailabilityCreateWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceAvailabilityUpdateManyWithoutExperienceInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceAvailabilityCreateOrConnectWithoutExperienceInput_1.ExperienceAvailabilityCreateOrConnectWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceAvailabilityUpdateManyWithoutExperienceInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceAvailabilityUpsertWithWhereUniqueWithoutExperienceInput_1.ExperienceAvailabilityUpsertWithWhereUniqueWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceAvailabilityUpdateManyWithoutExperienceInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityCreateManyExperienceInputEnvelope_1.ExperienceAvailabilityCreateManyExperienceInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityCreateManyExperienceInputEnvelope_1.ExperienceAvailabilityCreateManyExperienceInputEnvelope)
], ExperienceAvailabilityUpdateManyWithoutExperienceInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceAvailabilityWhereUniqueInput_1.ExperienceAvailabilityWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceAvailabilityUpdateManyWithoutExperienceInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceAvailabilityWhereUniqueInput_1.ExperienceAvailabilityWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceAvailabilityUpdateManyWithoutExperienceInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceAvailabilityWhereUniqueInput_1.ExperienceAvailabilityWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceAvailabilityUpdateManyWithoutExperienceInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceAvailabilityWhereUniqueInput_1.ExperienceAvailabilityWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceAvailabilityUpdateManyWithoutExperienceInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceAvailabilityUpdateWithWhereUniqueWithoutExperienceInput_1.ExperienceAvailabilityUpdateWithWhereUniqueWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceAvailabilityUpdateManyWithoutExperienceInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceAvailabilityUpdateManyWithWhereWithoutExperienceInput_1.ExperienceAvailabilityUpdateManyWithWhereWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceAvailabilityUpdateManyWithoutExperienceInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceAvailabilityScalarWhereInput_1.ExperienceAvailabilityScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceAvailabilityUpdateManyWithoutExperienceInput.prototype, "deleteMany", void 0);
ExperienceAvailabilityUpdateManyWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceAvailabilityUpdateManyWithoutExperienceInput", {
        isAbstract: true
    })
], ExperienceAvailabilityUpdateManyWithoutExperienceInput);
exports.ExperienceAvailabilityUpdateManyWithoutExperienceInput = ExperienceAvailabilityUpdateManyWithoutExperienceInput;
