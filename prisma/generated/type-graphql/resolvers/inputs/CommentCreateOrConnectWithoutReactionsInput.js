"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateOrConnectWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateWithoutReactionsInput_1 = require("../inputs/CommentCreateWithoutReactionsInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentCreateOrConnectWithoutReactionsInput = class CommentCreateOrConnectWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereUniqueInput_1.CommentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentWhereUniqueInput_1.CommentWhereUniqueInput)
], CommentCreateOrConnectWithoutReactionsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateWithoutReactionsInput_1.CommentCreateWithoutReactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentCreateWithoutReactionsInput_1.CommentCreateWithoutReactionsInput)
], CommentCreateOrConnectWithoutReactionsInput.prototype, "create", void 0);
CommentCreateOrConnectWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateOrConnectWithoutReactionsInput", {
        isAbstract: true
    })
], CommentCreateOrConnectWithoutReactionsInput);
exports.CommentCreateOrConnectWithoutReactionsInput = CommentCreateOrConnectWithoutReactionsInput;
