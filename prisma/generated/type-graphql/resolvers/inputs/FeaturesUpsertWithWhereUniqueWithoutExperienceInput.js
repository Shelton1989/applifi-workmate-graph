"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturesUpsertWithWhereUniqueWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FeaturesCreateWithoutExperienceInput_1 = require("../inputs/FeaturesCreateWithoutExperienceInput");
const FeaturesUpdateWithoutExperienceInput_1 = require("../inputs/FeaturesUpdateWithoutExperienceInput");
const FeaturesWhereUniqueInput_1 = require("../inputs/FeaturesWhereUniqueInput");
let FeaturesUpsertWithWhereUniqueWithoutExperienceInput = class FeaturesUpsertWithWhereUniqueWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesWhereUniqueInput_1.FeaturesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FeaturesWhereUniqueInput_1.FeaturesWhereUniqueInput)
], FeaturesUpsertWithWhereUniqueWithoutExperienceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesUpdateWithoutExperienceInput_1.FeaturesUpdateWithoutExperienceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FeaturesUpdateWithoutExperienceInput_1.FeaturesUpdateWithoutExperienceInput)
], FeaturesUpsertWithWhereUniqueWithoutExperienceInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesCreateWithoutExperienceInput_1.FeaturesCreateWithoutExperienceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FeaturesCreateWithoutExperienceInput_1.FeaturesCreateWithoutExperienceInput)
], FeaturesUpsertWithWhereUniqueWithoutExperienceInput.prototype, "create", void 0);
FeaturesUpsertWithWhereUniqueWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FeaturesUpsertWithWhereUniqueWithoutExperienceInput", {
        isAbstract: true
    })
], FeaturesUpsertWithWhereUniqueWithoutExperienceInput);
exports.FeaturesUpsertWithWhereUniqueWithoutExperienceInput = FeaturesUpsertWithWhereUniqueWithoutExperienceInput;
