"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturesUpdateWithWhereUniqueWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FeaturesUpdateWithoutExperienceInput_1 = require("../inputs/FeaturesUpdateWithoutExperienceInput");
const FeaturesWhereUniqueInput_1 = require("../inputs/FeaturesWhereUniqueInput");
let FeaturesUpdateWithWhereUniqueWithoutExperienceInput = class FeaturesUpdateWithWhereUniqueWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesWhereUniqueInput_1.FeaturesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FeaturesWhereUniqueInput_1.FeaturesWhereUniqueInput)
], FeaturesUpdateWithWhereUniqueWithoutExperienceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesUpdateWithoutExperienceInput_1.FeaturesUpdateWithoutExperienceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FeaturesUpdateWithoutExperienceInput_1.FeaturesUpdateWithoutExperienceInput)
], FeaturesUpdateWithWhereUniqueWithoutExperienceInput.prototype, "data", void 0);
FeaturesUpdateWithWhereUniqueWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FeaturesUpdateWithWhereUniqueWithoutExperienceInput", {
        isAbstract: true
    })
], FeaturesUpdateWithWhereUniqueWithoutExperienceInput);
exports.FeaturesUpdateWithWhereUniqueWithoutExperienceInput = FeaturesUpdateWithWhereUniqueWithoutExperienceInput;
