"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpsertWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateWithoutReactionsInput_1 = require("../inputs/CommentCreateWithoutReactionsInput");
const CommentUpdateWithoutReactionsInput_1 = require("../inputs/CommentUpdateWithoutReactionsInput");
let CommentUpsertWithoutReactionsInput = class CommentUpsertWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateWithoutReactionsInput_1.CommentUpdateWithoutReactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentUpdateWithoutReactionsInput_1.CommentUpdateWithoutReactionsInput)
], CommentUpsertWithoutReactionsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateWithoutReactionsInput_1.CommentCreateWithoutReactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentCreateWithoutReactionsInput_1.CommentCreateWithoutReactionsInput)
], CommentUpsertWithoutReactionsInput.prototype, "create", void 0);
CommentUpsertWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpsertWithoutReactionsInput", {
        isAbstract: true
    })
], CommentUpsertWithoutReactionsInput);
exports.CommentUpsertWithoutReactionsInput = CommentUpsertWithoutReactionsInput;
