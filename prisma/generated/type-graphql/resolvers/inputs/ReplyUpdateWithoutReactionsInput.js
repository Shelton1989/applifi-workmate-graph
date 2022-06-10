"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyUpdateWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentUpdateOneRequiredWithoutRepliesInput_1 = require("../inputs/CommentUpdateOneRequiredWithoutRepliesInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutRepliesInput_1 = require("../inputs/UserUpdateOneRequiredWithoutRepliesInput");
let ReplyUpdateWithoutReactionsInput = class ReplyUpdateWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ReplyUpdateWithoutReactionsInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateOneRequiredWithoutRepliesInput_1.CommentUpdateOneRequiredWithoutRepliesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentUpdateOneRequiredWithoutRepliesInput_1.CommentUpdateOneRequiredWithoutRepliesInput)
], ReplyUpdateWithoutReactionsInput.prototype, "Comment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutRepliesInput_1.UserUpdateOneRequiredWithoutRepliesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutRepliesInput_1.UserUpdateOneRequiredWithoutRepliesInput)
], ReplyUpdateWithoutReactionsInput.prototype, "Author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReplyUpdateWithoutReactionsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReplyUpdateWithoutReactionsInput.prototype, "updatedAt", void 0);
ReplyUpdateWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReplyUpdateWithoutReactionsInput", {
        isAbstract: true
    })
], ReplyUpdateWithoutReactionsInput);
exports.ReplyUpdateWithoutReactionsInput = ReplyUpdateWithoutReactionsInput;
