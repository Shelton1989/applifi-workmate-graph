"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpdateWithoutDocumentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const ReactionUpdateManyWithoutCommentInput_1 = require("../inputs/ReactionUpdateManyWithoutCommentInput");
const ReplyUpdateManyWithoutCommentInput_1 = require("../inputs/ReplyUpdateManyWithoutCommentInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutCommentsInput_1 = require("../inputs/UserUpdateOneRequiredWithoutCommentsInput");
let CommentUpdateWithoutDocumentInput = class CommentUpdateWithoutDocumentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CommentUpdateWithoutDocumentInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCommentsInput_1.UserUpdateOneRequiredWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutCommentsInput_1.UserUpdateOneRequiredWithoutCommentsInput)
], CommentUpdateWithoutDocumentInput.prototype, "Author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyUpdateManyWithoutCommentInput_1.ReplyUpdateManyWithoutCommentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyUpdateManyWithoutCommentInput_1.ReplyUpdateManyWithoutCommentInput)
], CommentUpdateWithoutDocumentInput.prototype, "Replies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateManyWithoutCommentInput_1.ReactionUpdateManyWithoutCommentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionUpdateManyWithoutCommentInput_1.ReactionUpdateManyWithoutCommentInput)
], CommentUpdateWithoutDocumentInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CommentUpdateWithoutDocumentInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CommentUpdateWithoutDocumentInput.prototype, "updatedAt", void 0);
CommentUpdateWithoutDocumentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpdateWithoutDocumentInput", {
        isAbstract: true
    })
], CommentUpdateWithoutDocumentInput);
exports.CommentUpdateWithoutDocumentInput = CommentUpdateWithoutDocumentInput;
