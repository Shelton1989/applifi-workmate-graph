"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceUpdateManyWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateManyTenantInputEnvelope_1 = require("../inputs/ExperienceCreateManyTenantInputEnvelope");
const ExperienceCreateOrConnectWithoutTenantInput_1 = require("../inputs/ExperienceCreateOrConnectWithoutTenantInput");
const ExperienceCreateWithoutTenantInput_1 = require("../inputs/ExperienceCreateWithoutTenantInput");
const ExperienceScalarWhereInput_1 = require("../inputs/ExperienceScalarWhereInput");
const ExperienceUpdateManyWithWhereWithoutTenantInput_1 = require("../inputs/ExperienceUpdateManyWithWhereWithoutTenantInput");
const ExperienceUpdateWithWhereUniqueWithoutTenantInput_1 = require("../inputs/ExperienceUpdateWithWhereUniqueWithoutTenantInput");
const ExperienceUpsertWithWhereUniqueWithoutTenantInput_1 = require("../inputs/ExperienceUpsertWithWhereUniqueWithoutTenantInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceUpdateManyWithoutTenantInput = class ExperienceUpdateManyWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceCreateWithoutTenantInput_1.ExperienceCreateWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceUpdateManyWithoutTenantInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceCreateOrConnectWithoutTenantInput_1.ExperienceCreateOrConnectWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceUpdateManyWithoutTenantInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceUpsertWithWhereUniqueWithoutTenantInput_1.ExperienceUpsertWithWhereUniqueWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceUpdateManyWithoutTenantInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateManyTenantInputEnvelope_1.ExperienceCreateManyTenantInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateManyTenantInputEnvelope_1.ExperienceCreateManyTenantInputEnvelope)
], ExperienceUpdateManyWithoutTenantInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceUpdateManyWithoutTenantInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceUpdateManyWithoutTenantInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceUpdateManyWithoutTenantInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceUpdateManyWithoutTenantInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceUpdateWithWhereUniqueWithoutTenantInput_1.ExperienceUpdateWithWhereUniqueWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceUpdateManyWithoutTenantInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceUpdateManyWithWhereWithoutTenantInput_1.ExperienceUpdateManyWithWhereWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceUpdateManyWithoutTenantInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceScalarWhereInput_1.ExperienceScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceUpdateManyWithoutTenantInput.prototype, "deleteMany", void 0);
ExperienceUpdateManyWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceUpdateManyWithoutTenantInput", {
        isAbstract: true
    })
], ExperienceUpdateManyWithoutTenantInput);
exports.ExperienceUpdateManyWithoutTenantInput = ExperienceUpdateManyWithoutTenantInput;
