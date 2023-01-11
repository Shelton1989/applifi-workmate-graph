"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceCreateOrConnectWithoutAvailabilityInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateWithoutAvailabilityInput_1 = require("../inputs/ExperienceCreateWithoutAvailabilityInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceCreateOrConnectWithoutAvailabilityInput = class ExperienceCreateOrConnectWithoutAvailabilityInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], ExperienceCreateOrConnectWithoutAvailabilityInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutAvailabilityInput_1.ExperienceCreateWithoutAvailabilityInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutAvailabilityInput_1.ExperienceCreateWithoutAvailabilityInput)
], ExperienceCreateOrConnectWithoutAvailabilityInput.prototype, "create", void 0);
ExperienceCreateOrConnectWithoutAvailabilityInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceCreateOrConnectWithoutAvailabilityInput", {
        isAbstract: true
    })
], ExperienceCreateOrConnectWithoutAvailabilityInput);
exports.ExperienceCreateOrConnectWithoutAvailabilityInput = ExperienceCreateOrConnectWithoutAvailabilityInput;
