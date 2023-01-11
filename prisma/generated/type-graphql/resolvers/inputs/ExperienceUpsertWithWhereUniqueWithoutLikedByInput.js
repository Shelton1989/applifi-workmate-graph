"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceUpsertWithWhereUniqueWithoutLikedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateWithoutLikedByInput_1 = require("../inputs/ExperienceCreateWithoutLikedByInput");
const ExperienceUpdateWithoutLikedByInput_1 = require("../inputs/ExperienceUpdateWithoutLikedByInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceUpsertWithWhereUniqueWithoutLikedByInput = class ExperienceUpsertWithWhereUniqueWithoutLikedByInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], ExperienceUpsertWithWhereUniqueWithoutLikedByInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdateWithoutLikedByInput_1.ExperienceUpdateWithoutLikedByInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceUpdateWithoutLikedByInput_1.ExperienceUpdateWithoutLikedByInput)
], ExperienceUpsertWithWhereUniqueWithoutLikedByInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutLikedByInput_1.ExperienceCreateWithoutLikedByInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutLikedByInput_1.ExperienceCreateWithoutLikedByInput)
], ExperienceUpsertWithWhereUniqueWithoutLikedByInput.prototype, "create", void 0);
ExperienceUpsertWithWhereUniqueWithoutLikedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceUpsertWithWhereUniqueWithoutLikedByInput", {
        isAbstract: true
    })
], ExperienceUpsertWithWhereUniqueWithoutLikedByInput);
exports.ExperienceUpsertWithWhereUniqueWithoutLikedByInput = ExperienceUpsertWithWhereUniqueWithoutLikedByInput;
