"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateNestedOneWithoutRepliesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateOrConnectWithoutRepliesInput_1 = require("../inputs/CommentCreateOrConnectWithoutRepliesInput");
const CommentCreateWithoutRepliesInput_1 = require("../inputs/CommentCreateWithoutRepliesInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentCreateNestedOneWithoutRepliesInput = class CommentCreateNestedOneWithoutRepliesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateWithoutRepliesInput_1.CommentCreateWithoutRepliesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateWithoutRepliesInput_1.CommentCreateWithoutRepliesInput)
], CommentCreateNestedOneWithoutRepliesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateOrConnectWithoutRepliesInput_1.CommentCreateOrConnectWithoutRepliesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateOrConnectWithoutRepliesInput_1.CommentCreateOrConnectWithoutRepliesInput)
], CommentCreateNestedOneWithoutRepliesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereUniqueInput_1.CommentWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentWhereUniqueInput_1.CommentWhereUniqueInput)
], CommentCreateNestedOneWithoutRepliesInput.prototype, "connect", void 0);
CommentCreateNestedOneWithoutRepliesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateNestedOneWithoutRepliesInput", {
        isAbstract: true
    })
], CommentCreateNestedOneWithoutRepliesInput);
exports.CommentCreateNestedOneWithoutRepliesInput = CommentCreateNestedOneWithoutRepliesInput;
