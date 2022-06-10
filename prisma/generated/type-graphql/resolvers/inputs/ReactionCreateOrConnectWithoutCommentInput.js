"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionCreateOrConnectWithoutCommentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateWithoutCommentInput_1 = require("../inputs/ReactionCreateWithoutCommentInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionCreateOrConnectWithoutCommentInput = class ReactionCreateOrConnectWithoutCommentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereUniqueInput_1.ReactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionWhereUniqueInput_1.ReactionWhereUniqueInput)
], ReactionCreateOrConnectWithoutCommentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateWithoutCommentInput_1.ReactionCreateWithoutCommentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionCreateWithoutCommentInput_1.ReactionCreateWithoutCommentInput)
], ReactionCreateOrConnectWithoutCommentInput.prototype, "create", void 0);
ReactionCreateOrConnectWithoutCommentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionCreateOrConnectWithoutCommentInput", {
        isAbstract: true
    })
], ReactionCreateOrConnectWithoutCommentInput);
exports.ReactionCreateOrConnectWithoutCommentInput = ReactionCreateOrConnectWithoutCommentInput;
