"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceUpdateOneRequiredWithoutAvailabilityInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateOrConnectWithoutAvailabilityInput_1 = require("../inputs/ExperienceCreateOrConnectWithoutAvailabilityInput");
const ExperienceCreateWithoutAvailabilityInput_1 = require("../inputs/ExperienceCreateWithoutAvailabilityInput");
const ExperienceUpdateWithoutAvailabilityInput_1 = require("../inputs/ExperienceUpdateWithoutAvailabilityInput");
const ExperienceUpsertWithoutAvailabilityInput_1 = require("../inputs/ExperienceUpsertWithoutAvailabilityInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceUpdateOneRequiredWithoutAvailabilityInput = class ExperienceUpdateOneRequiredWithoutAvailabilityInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutAvailabilityInput_1.ExperienceCreateWithoutAvailabilityInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutAvailabilityInput_1.ExperienceCreateWithoutAvailabilityInput)
], ExperienceUpdateOneRequiredWithoutAvailabilityInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateOrConnectWithoutAvailabilityInput_1.ExperienceCreateOrConnectWithoutAvailabilityInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateOrConnectWithoutAvailabilityInput_1.ExperienceCreateOrConnectWithoutAvailabilityInput)
], ExperienceUpdateOneRequiredWithoutAvailabilityInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpsertWithoutAvailabilityInput_1.ExperienceUpsertWithoutAvailabilityInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceUpsertWithoutAvailabilityInput_1.ExperienceUpsertWithoutAvailabilityInput)
], ExperienceUpdateOneRequiredWithoutAvailabilityInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], ExperienceUpdateOneRequiredWithoutAvailabilityInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdateWithoutAvailabilityInput_1.ExperienceUpdateWithoutAvailabilityInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceUpdateWithoutAvailabilityInput_1.ExperienceUpdateWithoutAvailabilityInput)
], ExperienceUpdateOneRequiredWithoutAvailabilityInput.prototype, "update", void 0);
ExperienceUpdateOneRequiredWithoutAvailabilityInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceUpdateOneRequiredWithoutAvailabilityInput", {
        isAbstract: true
    })
], ExperienceUpdateOneRequiredWithoutAvailabilityInput);
exports.ExperienceUpdateOneRequiredWithoutAvailabilityInput = ExperienceUpdateOneRequiredWithoutAvailabilityInput;
