"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceCreateNestedOneWithoutAvailabilityInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateOrConnectWithoutAvailabilityInput_1 = require("../inputs/ExperienceCreateOrConnectWithoutAvailabilityInput");
const ExperienceCreateWithoutAvailabilityInput_1 = require("../inputs/ExperienceCreateWithoutAvailabilityInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceCreateNestedOneWithoutAvailabilityInput = class ExperienceCreateNestedOneWithoutAvailabilityInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutAvailabilityInput_1.ExperienceCreateWithoutAvailabilityInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutAvailabilityInput_1.ExperienceCreateWithoutAvailabilityInput)
], ExperienceCreateNestedOneWithoutAvailabilityInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateOrConnectWithoutAvailabilityInput_1.ExperienceCreateOrConnectWithoutAvailabilityInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateOrConnectWithoutAvailabilityInput_1.ExperienceCreateOrConnectWithoutAvailabilityInput)
], ExperienceCreateNestedOneWithoutAvailabilityInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], ExperienceCreateNestedOneWithoutAvailabilityInput.prototype, "connect", void 0);
ExperienceCreateNestedOneWithoutAvailabilityInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceCreateNestedOneWithoutAvailabilityInput", {
        isAbstract: true
    })
], ExperienceCreateNestedOneWithoutAvailabilityInput);
exports.ExperienceCreateNestedOneWithoutAvailabilityInput = ExperienceCreateNestedOneWithoutAvailabilityInput;
