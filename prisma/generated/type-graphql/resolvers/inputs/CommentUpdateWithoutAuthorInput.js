"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpdateWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const DocumentUpdateOneRequiredWithoutCommentsInput_1 = require("../inputs/DocumentUpdateOneRequiredWithoutCommentsInput");
const ReactionUpdateManyWithoutCommentInput_1 = require("../inputs/ReactionUpdateManyWithoutCommentInput");
const ReplyUpdateManyWithoutCommentInput_1 = require("../inputs/ReplyUpdateManyWithoutCommentInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let CommentUpdateWithoutAuthorInput = class CommentUpdateWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CommentUpdateWithoutAuthorInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentUpdateOneRequiredWithoutCommentsInput_1.DocumentUpdateOneRequiredWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentUpdateOneRequiredWithoutCommentsInput_1.DocumentUpdateOneRequiredWithoutCommentsInput)
], CommentUpdateWithoutAuthorInput.prototype, "Document", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyUpdateManyWithoutCommentInput_1.ReplyUpdateManyWithoutCommentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyUpdateManyWithoutCommentInput_1.ReplyUpdateManyWithoutCommentInput)
], CommentUpdateWithoutAuthorInput.prototype, "Replies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateManyWithoutCommentInput_1.ReactionUpdateManyWithoutCommentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionUpdateManyWithoutCommentInput_1.ReactionUpdateManyWithoutCommentInput)
], CommentUpdateWithoutAuthorInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CommentUpdateWithoutAuthorInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CommentUpdateWithoutAuthorInput.prototype, "updatedAt", void 0);
CommentUpdateWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpdateWithoutAuthorInput", {
        isAbstract: true
    })
], CommentUpdateWithoutAuthorInput);
exports.CommentUpdateWithoutAuthorInput = CommentUpdateWithoutAuthorInput;
