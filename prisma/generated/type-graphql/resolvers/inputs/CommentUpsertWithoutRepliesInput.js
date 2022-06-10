"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpsertWithoutRepliesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateWithoutRepliesInput_1 = require("../inputs/CommentCreateWithoutRepliesInput");
const CommentUpdateWithoutRepliesInput_1 = require("../inputs/CommentUpdateWithoutRepliesInput");
let CommentUpsertWithoutRepliesInput = class CommentUpsertWithoutRepliesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateWithoutRepliesInput_1.CommentUpdateWithoutRepliesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentUpdateWithoutRepliesInput_1.CommentUpdateWithoutRepliesInput)
], CommentUpsertWithoutRepliesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateWithoutRepliesInput_1.CommentCreateWithoutRepliesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentCreateWithoutRepliesInput_1.CommentCreateWithoutRepliesInput)
], CommentUpsertWithoutRepliesInput.prototype, "create", void 0);
CommentUpsertWithoutRepliesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpsertWithoutRepliesInput", {
        isAbstract: true
    })
], CommentUpsertWithoutRepliesInput);
exports.CommentUpsertWithoutRepliesInput = CommentUpsertWithoutRepliesInput;
