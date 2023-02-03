"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionUpdateWithWhereUniqueWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionUpdateWithoutExperienceInput_1 = require("../inputs/ReactionUpdateWithoutExperienceInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionUpdateWithWhereUniqueWithoutExperienceInput = class ReactionUpdateWithWhereUniqueWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereUniqueInput_1.ReactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionWhereUniqueInput_1.ReactionWhereUniqueInput)
], ReactionUpdateWithWhereUniqueWithoutExperienceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateWithoutExperienceInput_1.ReactionUpdateWithoutExperienceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionUpdateWithoutExperienceInput_1.ReactionUpdateWithoutExperienceInput)
], ReactionUpdateWithWhereUniqueWithoutExperienceInput.prototype, "data", void 0);
ReactionUpdateWithWhereUniqueWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionUpdateWithWhereUniqueWithoutExperienceInput", {
        isAbstract: true
    })
], ReactionUpdateWithWhereUniqueWithoutExperienceInput);
exports.ReactionUpdateWithWhereUniqueWithoutExperienceInput = ReactionUpdateWithWhereUniqueWithoutExperienceInput;
