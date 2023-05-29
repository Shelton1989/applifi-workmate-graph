"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpsertWithWhereUniqueWithoutDocumentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateWithoutDocumentInput_1 = require("../inputs/CommentCreateWithoutDocumentInput");
const CommentUpdateWithoutDocumentInput_1 = require("../inputs/CommentUpdateWithoutDocumentInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentUpsertWithWhereUniqueWithoutDocumentInput = class CommentUpsertWithWhereUniqueWithoutDocumentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereUniqueInput_1.CommentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentWhereUniqueInput_1.CommentWhereUniqueInput)
], CommentUpsertWithWhereUniqueWithoutDocumentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateWithoutDocumentInput_1.CommentUpdateWithoutDocumentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentUpdateWithoutDocumentInput_1.CommentUpdateWithoutDocumentInput)
], CommentUpsertWithWhereUniqueWithoutDocumentInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateWithoutDocumentInput_1.CommentCreateWithoutDocumentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentCreateWithoutDocumentInput_1.CommentCreateWithoutDocumentInput)
], CommentUpsertWithWhereUniqueWithoutDocumentInput.prototype, "create", void 0);
CommentUpsertWithWhereUniqueWithoutDocumentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpsertWithWhereUniqueWithoutDocumentInput", {
        isAbstract: true
    })
], CommentUpsertWithWhereUniqueWithoutDocumentInput);
exports.CommentUpsertWithWhereUniqueWithoutDocumentInput = CommentUpsertWithWhereUniqueWithoutDocumentInput;
