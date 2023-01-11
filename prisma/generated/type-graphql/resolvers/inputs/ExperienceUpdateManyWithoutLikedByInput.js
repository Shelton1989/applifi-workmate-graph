"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceUpdateManyWithoutLikedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateOrConnectWithoutLikedByInput_1 = require("../inputs/ExperienceCreateOrConnectWithoutLikedByInput");
const ExperienceCreateWithoutLikedByInput_1 = require("../inputs/ExperienceCreateWithoutLikedByInput");
const ExperienceScalarWhereInput_1 = require("../inputs/ExperienceScalarWhereInput");
const ExperienceUpdateManyWithWhereWithoutLikedByInput_1 = require("../inputs/ExperienceUpdateManyWithWhereWithoutLikedByInput");
const ExperienceUpdateWithWhereUniqueWithoutLikedByInput_1 = require("../inputs/ExperienceUpdateWithWhereUniqueWithoutLikedByInput");
const ExperienceUpsertWithWhereUniqueWithoutLikedByInput_1 = require("../inputs/ExperienceUpsertWithWhereUniqueWithoutLikedByInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceUpdateManyWithoutLikedByInput = class ExperienceUpdateManyWithoutLikedByInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceCreateWithoutLikedByInput_1.ExperienceCreateWithoutLikedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceUpdateManyWithoutLikedByInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceCreateOrConnectWithoutLikedByInput_1.ExperienceCreateOrConnectWithoutLikedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceUpdateManyWithoutLikedByInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceUpsertWithWhereUniqueWithoutLikedByInput_1.ExperienceUpsertWithWhereUniqueWithoutLikedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceUpdateManyWithoutLikedByInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceUpdateManyWithoutLikedByInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceUpdateManyWithoutLikedByInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceUpdateManyWithoutLikedByInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceUpdateManyWithoutLikedByInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceUpdateWithWhereUniqueWithoutLikedByInput_1.ExperienceUpdateWithWhereUniqueWithoutLikedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceUpdateManyWithoutLikedByInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceUpdateManyWithWhereWithoutLikedByInput_1.ExperienceUpdateManyWithWhereWithoutLikedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceUpdateManyWithoutLikedByInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceScalarWhereInput_1.ExperienceScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceUpdateManyWithoutLikedByInput.prototype, "deleteMany", void 0);
ExperienceUpdateManyWithoutLikedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceUpdateManyWithoutLikedByInput", {
        isAbstract: true
    })
], ExperienceUpdateManyWithoutLikedByInput);
exports.ExperienceUpdateManyWithoutLikedByInput = ExperienceUpdateManyWithoutLikedByInput;
