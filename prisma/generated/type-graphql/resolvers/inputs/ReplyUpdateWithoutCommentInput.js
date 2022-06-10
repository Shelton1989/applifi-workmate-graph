"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyUpdateWithoutCommentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const ReactionUpdateManyWithoutReplyInput_1 = require("../inputs/ReactionUpdateManyWithoutReplyInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutRepliesInput_1 = require("../inputs/UserUpdateOneRequiredWithoutRepliesInput");
let ReplyUpdateWithoutCommentInput = class ReplyUpdateWithoutCommentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ReplyUpdateWithoutCommentInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutRepliesInput_1.UserUpdateOneRequiredWithoutRepliesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutRepliesInput_1.UserUpdateOneRequiredWithoutRepliesInput)
], ReplyUpdateWithoutCommentInput.prototype, "Author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateManyWithoutReplyInput_1.ReactionUpdateManyWithoutReplyInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionUpdateManyWithoutReplyInput_1.ReactionUpdateManyWithoutReplyInput)
], ReplyUpdateWithoutCommentInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReplyUpdateWithoutCommentInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReplyUpdateWithoutCommentInput.prototype, "updatedAt", void 0);
ReplyUpdateWithoutCommentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReplyUpdateWithoutCommentInput", {
        isAbstract: true
    })
], ReplyUpdateWithoutCommentInput);
exports.ReplyUpdateWithoutCommentInput = ReplyUpdateWithoutCommentInput;
