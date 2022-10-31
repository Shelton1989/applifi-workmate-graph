"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionUpdateWithWhereUniqueWithoutTopicInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionUpdateWithoutTopicInput_1 = require("../inputs/ReactionUpdateWithoutTopicInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionUpdateWithWhereUniqueWithoutTopicInput = class ReactionUpdateWithWhereUniqueWithoutTopicInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereUniqueInput_1.ReactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionWhereUniqueInput_1.ReactionWhereUniqueInput)
], ReactionUpdateWithWhereUniqueWithoutTopicInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateWithoutTopicInput_1.ReactionUpdateWithoutTopicInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionUpdateWithoutTopicInput_1.ReactionUpdateWithoutTopicInput)
], ReactionUpdateWithWhereUniqueWithoutTopicInput.prototype, "data", void 0);
ReactionUpdateWithWhereUniqueWithoutTopicInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionUpdateWithWhereUniqueWithoutTopicInput", {
        isAbstract: true
    })
], ReactionUpdateWithWhereUniqueWithoutTopicInput);
exports.ReactionUpdateWithWhereUniqueWithoutTopicInput = ReactionUpdateWithWhereUniqueWithoutTopicInput;
