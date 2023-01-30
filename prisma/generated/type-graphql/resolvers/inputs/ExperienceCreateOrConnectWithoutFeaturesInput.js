"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceCreateOrConnectWithoutFeaturesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateWithoutFeaturesInput_1 = require("../inputs/ExperienceCreateWithoutFeaturesInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceCreateOrConnectWithoutFeaturesInput = class ExperienceCreateOrConnectWithoutFeaturesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], ExperienceCreateOrConnectWithoutFeaturesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutFeaturesInput_1.ExperienceCreateWithoutFeaturesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutFeaturesInput_1.ExperienceCreateWithoutFeaturesInput)
], ExperienceCreateOrConnectWithoutFeaturesInput.prototype, "create", void 0);
ExperienceCreateOrConnectWithoutFeaturesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceCreateOrConnectWithoutFeaturesInput", {
        isAbstract: true
    })
], ExperienceCreateOrConnectWithoutFeaturesInput);
exports.ExperienceCreateOrConnectWithoutFeaturesInput = ExperienceCreateOrConnectWithoutFeaturesInput;
