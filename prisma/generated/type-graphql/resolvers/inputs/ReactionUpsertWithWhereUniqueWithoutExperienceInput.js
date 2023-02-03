"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionUpsertWithWhereUniqueWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateWithoutExperienceInput_1 = require("../inputs/ReactionCreateWithoutExperienceInput");
const ReactionUpdateWithoutExperienceInput_1 = require("../inputs/ReactionUpdateWithoutExperienceInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionUpsertWithWhereUniqueWithoutExperienceInput = class ReactionUpsertWithWhereUniqueWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereUniqueInput_1.ReactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionWhereUniqueInput_1.ReactionWhereUniqueInput)
], ReactionUpsertWithWhereUniqueWithoutExperienceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateWithoutExperienceInput_1.ReactionUpdateWithoutExperienceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionUpdateWithoutExperienceInput_1.ReactionUpdateWithoutExperienceInput)
], ReactionUpsertWithWhereUniqueWithoutExperienceInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateWithoutExperienceInput_1.ReactionCreateWithoutExperienceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionCreateWithoutExperienceInput_1.ReactionCreateWithoutExperienceInput)
], ReactionUpsertWithWhereUniqueWithoutExperienceInput.prototype, "create", void 0);
ReactionUpsertWithWhereUniqueWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionUpsertWithWhereUniqueWithoutExperienceInput", {
        isAbstract: true
    })
], ReactionUpsertWithWhereUniqueWithoutExperienceInput);
exports.ReactionUpsertWithWhereUniqueWithoutExperienceInput = ReactionUpsertWithWhereUniqueWithoutExperienceInput;
