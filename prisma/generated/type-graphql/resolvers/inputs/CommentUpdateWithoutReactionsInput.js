"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpdateWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const PostUpdateOneRequiredWithoutCommentsInput_1 = require("../inputs/PostUpdateOneRequiredWithoutCommentsInput");
const ReplyUpdateManyWithoutCommentInput_1 = require("../inputs/ReplyUpdateManyWithoutCommentInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutCommentsInput_1 = require("../inputs/UserUpdateOneRequiredWithoutCommentsInput");
let CommentUpdateWithoutReactionsInput = class CommentUpdateWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CommentUpdateWithoutReactionsInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutCommentsInput_1.PostUpdateOneRequiredWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateOneRequiredWithoutCommentsInput_1.PostUpdateOneRequiredWithoutCommentsInput)
], CommentUpdateWithoutReactionsInput.prototype, "Post", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCommentsInput_1.UserUpdateOneRequiredWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutCommentsInput_1.UserUpdateOneRequiredWithoutCommentsInput)
], CommentUpdateWithoutReactionsInput.prototype, "Author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyUpdateManyWithoutCommentInput_1.ReplyUpdateManyWithoutCommentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyUpdateManyWithoutCommentInput_1.ReplyUpdateManyWithoutCommentInput)
], CommentUpdateWithoutReactionsInput.prototype, "Replies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CommentUpdateWithoutReactionsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CommentUpdateWithoutReactionsInput.prototype, "updatedAt", void 0);
CommentUpdateWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpdateWithoutReactionsInput", {
        isAbstract: true
    })
], CommentUpdateWithoutReactionsInput);
exports.CommentUpdateWithoutReactionsInput = CommentUpdateWithoutReactionsInput;
