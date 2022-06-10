"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateOrConnectWithoutRepliesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateWithoutRepliesInput_1 = require("../inputs/CommentCreateWithoutRepliesInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentCreateOrConnectWithoutRepliesInput = class CommentCreateOrConnectWithoutRepliesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereUniqueInput_1.CommentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentWhereUniqueInput_1.CommentWhereUniqueInput)
], CommentCreateOrConnectWithoutRepliesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateWithoutRepliesInput_1.CommentCreateWithoutRepliesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentCreateWithoutRepliesInput_1.CommentCreateWithoutRepliesInput)
], CommentCreateOrConnectWithoutRepliesInput.prototype, "create", void 0);
CommentCreateOrConnectWithoutRepliesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateOrConnectWithoutRepliesInput", {
        isAbstract: true
    })
], CommentCreateOrConnectWithoutRepliesInput);
exports.CommentCreateOrConnectWithoutRepliesInput = CommentCreateOrConnectWithoutRepliesInput;
