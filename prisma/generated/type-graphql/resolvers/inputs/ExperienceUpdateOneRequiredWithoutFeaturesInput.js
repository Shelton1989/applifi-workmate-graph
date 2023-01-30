"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceUpdateOneRequiredWithoutFeaturesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateOrConnectWithoutFeaturesInput_1 = require("../inputs/ExperienceCreateOrConnectWithoutFeaturesInput");
const ExperienceCreateWithoutFeaturesInput_1 = require("../inputs/ExperienceCreateWithoutFeaturesInput");
const ExperienceUpdateWithoutFeaturesInput_1 = require("../inputs/ExperienceUpdateWithoutFeaturesInput");
const ExperienceUpsertWithoutFeaturesInput_1 = require("../inputs/ExperienceUpsertWithoutFeaturesInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceUpdateOneRequiredWithoutFeaturesInput = class ExperienceUpdateOneRequiredWithoutFeaturesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutFeaturesInput_1.ExperienceCreateWithoutFeaturesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutFeaturesInput_1.ExperienceCreateWithoutFeaturesInput)
], ExperienceUpdateOneRequiredWithoutFeaturesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateOrConnectWithoutFeaturesInput_1.ExperienceCreateOrConnectWithoutFeaturesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateOrConnectWithoutFeaturesInput_1.ExperienceCreateOrConnectWithoutFeaturesInput)
], ExperienceUpdateOneRequiredWithoutFeaturesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpsertWithoutFeaturesInput_1.ExperienceUpsertWithoutFeaturesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceUpsertWithoutFeaturesInput_1.ExperienceUpsertWithoutFeaturesInput)
], ExperienceUpdateOneRequiredWithoutFeaturesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], ExperienceUpdateOneRequiredWithoutFeaturesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdateWithoutFeaturesInput_1.ExperienceUpdateWithoutFeaturesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceUpdateWithoutFeaturesInput_1.ExperienceUpdateWithoutFeaturesInput)
], ExperienceUpdateOneRequiredWithoutFeaturesInput.prototype, "update", void 0);
ExperienceUpdateOneRequiredWithoutFeaturesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceUpdateOneRequiredWithoutFeaturesInput", {
        isAbstract: true
    })
], ExperienceUpdateOneRequiredWithoutFeaturesInput);
exports.ExperienceUpdateOneRequiredWithoutFeaturesInput = ExperienceUpdateOneRequiredWithoutFeaturesInput;
