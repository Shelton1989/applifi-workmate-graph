"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyUpdateWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentUpdateOneRequiredWithoutRepliesInput_1 = require("../inputs/CommentUpdateOneRequiredWithoutRepliesInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const ReactionUpdateManyWithoutReplyInput_1 = require("../inputs/ReactionUpdateManyWithoutReplyInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ReplyUpdateWithoutAuthorInput = class ReplyUpdateWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ReplyUpdateWithoutAuthorInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateOneRequiredWithoutRepliesInput_1.CommentUpdateOneRequiredWithoutRepliesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentUpdateOneRequiredWithoutRepliesInput_1.CommentUpdateOneRequiredWithoutRepliesInput)
], ReplyUpdateWithoutAuthorInput.prototype, "Comment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateManyWithoutReplyInput_1.ReactionUpdateManyWithoutReplyInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionUpdateManyWithoutReplyInput_1.ReactionUpdateManyWithoutReplyInput)
], ReplyUpdateWithoutAuthorInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReplyUpdateWithoutAuthorInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReplyUpdateWithoutAuthorInput.prototype, "updatedAt", void 0);
ReplyUpdateWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReplyUpdateWithoutAuthorInput", {
        isAbstract: true
    })
], ReplyUpdateWithoutAuthorInput);
exports.ReplyUpdateWithoutAuthorInput = ReplyUpdateWithoutAuthorInput;
