"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpdateWithWhereUniqueWithoutDocumentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentUpdateWithoutDocumentInput_1 = require("../inputs/CommentUpdateWithoutDocumentInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentUpdateWithWhereUniqueWithoutDocumentInput = class CommentUpdateWithWhereUniqueWithoutDocumentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereUniqueInput_1.CommentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentWhereUniqueInput_1.CommentWhereUniqueInput)
], CommentUpdateWithWhereUniqueWithoutDocumentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateWithoutDocumentInput_1.CommentUpdateWithoutDocumentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentUpdateWithoutDocumentInput_1.CommentUpdateWithoutDocumentInput)
], CommentUpdateWithWhereUniqueWithoutDocumentInput.prototype, "data", void 0);
CommentUpdateWithWhereUniqueWithoutDocumentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpdateWithWhereUniqueWithoutDocumentInput", {
        isAbstract: true
    })
], CommentUpdateWithWhereUniqueWithoutDocumentInput);
exports.CommentUpdateWithWhereUniqueWithoutDocumentInput = CommentUpdateWithWhereUniqueWithoutDocumentInput;
