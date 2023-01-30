"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturesCreateOrConnectWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FeaturesCreateWithoutExperienceInput_1 = require("../inputs/FeaturesCreateWithoutExperienceInput");
const FeaturesWhereUniqueInput_1 = require("../inputs/FeaturesWhereUniqueInput");
let FeaturesCreateOrConnectWithoutExperienceInput = class FeaturesCreateOrConnectWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesWhereUniqueInput_1.FeaturesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FeaturesWhereUniqueInput_1.FeaturesWhereUniqueInput)
], FeaturesCreateOrConnectWithoutExperienceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesCreateWithoutExperienceInput_1.FeaturesCreateWithoutExperienceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FeaturesCreateWithoutExperienceInput_1.FeaturesCreateWithoutExperienceInput)
], FeaturesCreateOrConnectWithoutExperienceInput.prototype, "create", void 0);
FeaturesCreateOrConnectWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FeaturesCreateOrConnectWithoutExperienceInput", {
        isAbstract: true
    })
], FeaturesCreateOrConnectWithoutExperienceInput);
exports.FeaturesCreateOrConnectWithoutExperienceInput = FeaturesCreateOrConnectWithoutExperienceInput;
