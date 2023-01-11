"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceCreateOrConnectWithoutLocationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateWithoutLocationsInput_1 = require("../inputs/ExperienceCreateWithoutLocationsInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceCreateOrConnectWithoutLocationsInput = class ExperienceCreateOrConnectWithoutLocationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], ExperienceCreateOrConnectWithoutLocationsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutLocationsInput_1.ExperienceCreateWithoutLocationsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutLocationsInput_1.ExperienceCreateWithoutLocationsInput)
], ExperienceCreateOrConnectWithoutLocationsInput.prototype, "create", void 0);
ExperienceCreateOrConnectWithoutLocationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceCreateOrConnectWithoutLocationsInput", {
        isAbstract: true
    })
], ExperienceCreateOrConnectWithoutLocationsInput);
exports.ExperienceCreateOrConnectWithoutLocationsInput = ExperienceCreateOrConnectWithoutLocationsInput;
