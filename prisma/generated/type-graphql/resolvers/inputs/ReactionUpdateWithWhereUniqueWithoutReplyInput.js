"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionUpdateWithWhereUniqueWithoutReplyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionUpdateWithoutReplyInput_1 = require("../inputs/ReactionUpdateWithoutReplyInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionUpdateWithWhereUniqueWithoutReplyInput = class ReactionUpdateWithWhereUniqueWithoutReplyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereUniqueInput_1.ReactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionWhereUniqueInput_1.ReactionWhereUniqueInput)
], ReactionUpdateWithWhereUniqueWithoutReplyInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateWithoutReplyInput_1.ReactionUpdateWithoutReplyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionUpdateWithoutReplyInput_1.ReactionUpdateWithoutReplyInput)
], ReactionUpdateWithWhereUniqueWithoutReplyInput.prototype, "data", void 0);
ReactionUpdateWithWhereUniqueWithoutReplyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionUpdateWithWhereUniqueWithoutReplyInput", {
        isAbstract: true
    })
], ReactionUpdateWithWhereUniqueWithoutReplyInput);
exports.ReactionUpdateWithWhereUniqueWithoutReplyInput = ReactionUpdateWithWhereUniqueWithoutReplyInput;
