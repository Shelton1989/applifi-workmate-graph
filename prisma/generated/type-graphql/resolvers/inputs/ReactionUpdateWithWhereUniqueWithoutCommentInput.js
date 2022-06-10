"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionUpdateWithWhereUniqueWithoutCommentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionUpdateWithoutCommentInput_1 = require("../inputs/ReactionUpdateWithoutCommentInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionUpdateWithWhereUniqueWithoutCommentInput = class ReactionUpdateWithWhereUniqueWithoutCommentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereUniqueInput_1.ReactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionWhereUniqueInput_1.ReactionWhereUniqueInput)
], ReactionUpdateWithWhereUniqueWithoutCommentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateWithoutCommentInput_1.ReactionUpdateWithoutCommentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionUpdateWithoutCommentInput_1.ReactionUpdateWithoutCommentInput)
], ReactionUpdateWithWhereUniqueWithoutCommentInput.prototype, "data", void 0);
ReactionUpdateWithWhereUniqueWithoutCommentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionUpdateWithWhereUniqueWithoutCommentInput", {
        isAbstract: true
    })
], ReactionUpdateWithWhereUniqueWithoutCommentInput);
exports.ReactionUpdateWithWhereUniqueWithoutCommentInput = ReactionUpdateWithWhereUniqueWithoutCommentInput;
