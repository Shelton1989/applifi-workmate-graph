"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceCreateNestedOneWithoutFeaturesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateOrConnectWithoutFeaturesInput_1 = require("../inputs/ExperienceCreateOrConnectWithoutFeaturesInput");
const ExperienceCreateWithoutFeaturesInput_1 = require("../inputs/ExperienceCreateWithoutFeaturesInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceCreateNestedOneWithoutFeaturesInput = class ExperienceCreateNestedOneWithoutFeaturesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutFeaturesInput_1.ExperienceCreateWithoutFeaturesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutFeaturesInput_1.ExperienceCreateWithoutFeaturesInput)
], ExperienceCreateNestedOneWithoutFeaturesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateOrConnectWithoutFeaturesInput_1.ExperienceCreateOrConnectWithoutFeaturesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateOrConnectWithoutFeaturesInput_1.ExperienceCreateOrConnectWithoutFeaturesInput)
], ExperienceCreateNestedOneWithoutFeaturesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], ExperienceCreateNestedOneWithoutFeaturesInput.prototype, "connect", void 0);
ExperienceCreateNestedOneWithoutFeaturesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceCreateNestedOneWithoutFeaturesInput", {
        isAbstract: true
    })
], ExperienceCreateNestedOneWithoutFeaturesInput);
exports.ExperienceCreateNestedOneWithoutFeaturesInput = ExperienceCreateNestedOneWithoutFeaturesInput;
