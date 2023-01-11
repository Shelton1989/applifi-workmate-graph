"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceUpdateWithWhereUniqueWithoutLikedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceUpdateWithoutLikedByInput_1 = require("../inputs/ExperienceUpdateWithoutLikedByInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceUpdateWithWhereUniqueWithoutLikedByInput = class ExperienceUpdateWithWhereUniqueWithoutLikedByInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], ExperienceUpdateWithWhereUniqueWithoutLikedByInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdateWithoutLikedByInput_1.ExperienceUpdateWithoutLikedByInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceUpdateWithoutLikedByInput_1.ExperienceUpdateWithoutLikedByInput)
], ExperienceUpdateWithWhereUniqueWithoutLikedByInput.prototype, "data", void 0);
ExperienceUpdateWithWhereUniqueWithoutLikedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceUpdateWithWhereUniqueWithoutLikedByInput", {
        isAbstract: true
    })
], ExperienceUpdateWithWhereUniqueWithoutLikedByInput);
exports.ExperienceUpdateWithWhereUniqueWithoutLikedByInput = ExperienceUpdateWithWhereUniqueWithoutLikedByInput;
