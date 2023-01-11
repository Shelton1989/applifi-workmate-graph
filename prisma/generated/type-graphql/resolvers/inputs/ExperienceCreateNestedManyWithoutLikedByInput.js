"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceCreateNestedManyWithoutLikedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateOrConnectWithoutLikedByInput_1 = require("../inputs/ExperienceCreateOrConnectWithoutLikedByInput");
const ExperienceCreateWithoutLikedByInput_1 = require("../inputs/ExperienceCreateWithoutLikedByInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceCreateNestedManyWithoutLikedByInput = class ExperienceCreateNestedManyWithoutLikedByInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceCreateWithoutLikedByInput_1.ExperienceCreateWithoutLikedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceCreateNestedManyWithoutLikedByInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceCreateOrConnectWithoutLikedByInput_1.ExperienceCreateOrConnectWithoutLikedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceCreateNestedManyWithoutLikedByInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceCreateNestedManyWithoutLikedByInput.prototype, "connect", void 0);
ExperienceCreateNestedManyWithoutLikedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceCreateNestedManyWithoutLikedByInput", {
        isAbstract: true
    })
], ExperienceCreateNestedManyWithoutLikedByInput);
exports.ExperienceCreateNestedManyWithoutLikedByInput = ExperienceCreateNestedManyWithoutLikedByInput;
