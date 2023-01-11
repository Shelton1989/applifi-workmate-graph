"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceCreateNestedOneWithoutLocationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateOrConnectWithoutLocationsInput_1 = require("../inputs/ExperienceCreateOrConnectWithoutLocationsInput");
const ExperienceCreateWithoutLocationsInput_1 = require("../inputs/ExperienceCreateWithoutLocationsInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceCreateNestedOneWithoutLocationsInput = class ExperienceCreateNestedOneWithoutLocationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutLocationsInput_1.ExperienceCreateWithoutLocationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutLocationsInput_1.ExperienceCreateWithoutLocationsInput)
], ExperienceCreateNestedOneWithoutLocationsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateOrConnectWithoutLocationsInput_1.ExperienceCreateOrConnectWithoutLocationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateOrConnectWithoutLocationsInput_1.ExperienceCreateOrConnectWithoutLocationsInput)
], ExperienceCreateNestedOneWithoutLocationsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], ExperienceCreateNestedOneWithoutLocationsInput.prototype, "connect", void 0);
ExperienceCreateNestedOneWithoutLocationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceCreateNestedOneWithoutLocationsInput", {
        isAbstract: true
    })
], ExperienceCreateNestedOneWithoutLocationsInput);
exports.ExperienceCreateNestedOneWithoutLocationsInput = ExperienceCreateNestedOneWithoutLocationsInput;
