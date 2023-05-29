"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpdateWithoutRepliesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const DocumentUpdateOneRequiredWithoutCommentsInput_1 = require("../inputs/DocumentUpdateOneRequiredWithoutCommentsInput");
const ReactionUpdateManyWithoutCommentInput_1 = require("../inputs/ReactionUpdateManyWithoutCommentInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutCommentsInput_1 = require("../inputs/UserUpdateOneRequiredWithoutCommentsInput");
let CommentUpdateWithoutRepliesInput = class CommentUpdateWithoutRepliesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CommentUpdateWithoutRepliesInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentUpdateOneRequiredWithoutCommentsInput_1.DocumentUpdateOneRequiredWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentUpdateOneRequiredWithoutCommentsInput_1.DocumentUpdateOneRequiredWithoutCommentsInput)
], CommentUpdateWithoutRepliesInput.prototype, "Document", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCommentsInput_1.UserUpdateOneRequiredWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutCommentsInput_1.UserUpdateOneRequiredWithoutCommentsInput)
], CommentUpdateWithoutRepliesInput.prototype, "Author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateManyWithoutCommentInput_1.ReactionUpdateManyWithoutCommentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionUpdateManyWithoutCommentInput_1.ReactionUpdateManyWithoutCommentInput)
], CommentUpdateWithoutRepliesInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CommentUpdateWithoutRepliesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CommentUpdateWithoutRepliesInput.prototype, "updatedAt", void 0);
CommentUpdateWithoutRepliesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpdateWithoutRepliesInput", {
        isAbstract: true
    })
], CommentUpdateWithoutRepliesInput);
exports.CommentUpdateWithoutRepliesInput = CommentUpdateWithoutRepliesInput;
