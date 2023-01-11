"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceCreateOrConnectWithoutLikedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateWithoutLikedByInput_1 = require("../inputs/ExperienceCreateWithoutLikedByInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceCreateOrConnectWithoutLikedByInput = class ExperienceCreateOrConnectWithoutLikedByInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], ExperienceCreateOrConnectWithoutLikedByInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutLikedByInput_1.ExperienceCreateWithoutLikedByInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutLikedByInput_1.ExperienceCreateWithoutLikedByInput)
], ExperienceCreateOrConnectWithoutLikedByInput.prototype, "create", void 0);
ExperienceCreateOrConnectWithoutLikedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceCreateOrConnectWithoutLikedByInput", {
        isAbstract: true
    })
], ExperienceCreateOrConnectWithoutLikedByInput);
exports.ExperienceCreateOrConnectWithoutLikedByInput = ExperienceCreateOrConnectWithoutLikedByInput;
