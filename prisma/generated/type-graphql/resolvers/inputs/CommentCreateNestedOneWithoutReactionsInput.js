"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateNestedOneWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateOrConnectWithoutReactionsInput_1 = require("../inputs/CommentCreateOrConnectWithoutReactionsInput");
const CommentCreateWithoutReactionsInput_1 = require("../inputs/CommentCreateWithoutReactionsInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentCreateNestedOneWithoutReactionsInput = class CommentCreateNestedOneWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateWithoutReactionsInput_1.CommentCreateWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateWithoutReactionsInput_1.CommentCreateWithoutReactionsInput)
], CommentCreateNestedOneWithoutReactionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateOrConnectWithoutReactionsInput_1.CommentCreateOrConnectWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateOrConnectWithoutReactionsInput_1.CommentCreateOrConnectWithoutReactionsInput)
], CommentCreateNestedOneWithoutReactionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereUniqueInput_1.CommentWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentWhereUniqueInput_1.CommentWhereUniqueInput)
], CommentCreateNestedOneWithoutReactionsInput.prototype, "connect", void 0);
CommentCreateNestedOneWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateNestedOneWithoutReactionsInput", {
        isAbstract: true
    })
], CommentCreateNestedOneWithoutReactionsInput);
exports.CommentCreateNestedOneWithoutReactionsInput = CommentCreateNestedOneWithoutReactionsInput;
