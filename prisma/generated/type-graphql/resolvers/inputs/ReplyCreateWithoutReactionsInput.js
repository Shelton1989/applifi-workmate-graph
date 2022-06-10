"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyCreateWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateNestedOneWithoutRepliesInput_1 = require("../inputs/CommentCreateNestedOneWithoutRepliesInput");
const UserCreateNestedOneWithoutRepliesInput_1 = require("../inputs/UserCreateNestedOneWithoutRepliesInput");
let ReplyCreateWithoutReactionsInput = class ReplyCreateWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReplyCreateWithoutReactionsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReplyCreateWithoutReactionsInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedOneWithoutRepliesInput_1.CommentCreateNestedOneWithoutRepliesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedOneWithoutRepliesInput_1.CommentCreateNestedOneWithoutRepliesInput)
], ReplyCreateWithoutReactionsInput.prototype, "Comment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutRepliesInput_1.UserCreateNestedOneWithoutRepliesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutRepliesInput_1.UserCreateNestedOneWithoutRepliesInput)
], ReplyCreateWithoutReactionsInput.prototype, "Author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReplyCreateWithoutReactionsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReplyCreateWithoutReactionsInput.prototype, "updatedAt", void 0);
ReplyCreateWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReplyCreateWithoutReactionsInput", {
        isAbstract: true
    })
], ReplyCreateWithoutReactionsInput);
exports.ReplyCreateWithoutReactionsInput = ReplyCreateWithoutReactionsInput;
