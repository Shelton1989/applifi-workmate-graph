"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateOrConnectWithoutDocumentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateWithoutDocumentInput_1 = require("../inputs/CommentCreateWithoutDocumentInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentCreateOrConnectWithoutDocumentInput = class CommentCreateOrConnectWithoutDocumentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereUniqueInput_1.CommentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentWhereUniqueInput_1.CommentWhereUniqueInput)
], CommentCreateOrConnectWithoutDocumentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateWithoutDocumentInput_1.CommentCreateWithoutDocumentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentCreateWithoutDocumentInput_1.CommentCreateWithoutDocumentInput)
], CommentCreateOrConnectWithoutDocumentInput.prototype, "create", void 0);
CommentCreateOrConnectWithoutDocumentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateOrConnectWithoutDocumentInput", {
        isAbstract: true
    })
], CommentCreateOrConnectWithoutDocumentInput);
exports.CommentCreateOrConnectWithoutDocumentInput = CommentCreateOrConnectWithoutDocumentInput;
