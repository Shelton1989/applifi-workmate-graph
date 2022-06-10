"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentUpdateOneRequiredWithoutRepliesInput_1 = require("../inputs/CommentUpdateOneRequiredWithoutRepliesInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const ReactionUpdateManyWithoutReplyInput_1 = require("../inputs/ReactionUpdateManyWithoutReplyInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutRepliesInput_1 = require("../inputs/UserUpdateOneRequiredWithoutRepliesInput");
let ReplyUpdateInput = class ReplyUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ReplyUpdateInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateOneRequiredWithoutRepliesInput_1.CommentUpdateOneRequiredWithoutRepliesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentUpdateOneRequiredWithoutRepliesInput_1.CommentUpdateOneRequiredWithoutRepliesInput)
], ReplyUpdateInput.prototype, "Comment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutRepliesInput_1.UserUpdateOneRequiredWithoutRepliesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutRepliesInput_1.UserUpdateOneRequiredWithoutRepliesInput)
], ReplyUpdateInput.prototype, "Author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateManyWithoutReplyInput_1.ReactionUpdateManyWithoutReplyInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionUpdateManyWithoutReplyInput_1.ReactionUpdateManyWithoutReplyInput)
], ReplyUpdateInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReplyUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReplyUpdateInput.prototype, "updatedAt", void 0);
ReplyUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReplyUpdateInput", {
        isAbstract: true
    })
], ReplyUpdateInput);
exports.ReplyUpdateInput = ReplyUpdateInput;
