"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpdateManyWithWhereWithoutDocumentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentScalarWhereInput_1 = require("../inputs/CommentScalarWhereInput");
const CommentUpdateManyMutationInput_1 = require("../inputs/CommentUpdateManyMutationInput");
let CommentUpdateManyWithWhereWithoutDocumentInput = class CommentUpdateManyWithWhereWithoutDocumentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentScalarWhereInput_1.CommentScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentScalarWhereInput_1.CommentScalarWhereInput)
], CommentUpdateManyWithWhereWithoutDocumentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateManyMutationInput_1.CommentUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CommentUpdateManyMutationInput_1.CommentUpdateManyMutationInput)
], CommentUpdateManyWithWhereWithoutDocumentInput.prototype, "data", void 0);
CommentUpdateManyWithWhereWithoutDocumentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpdateManyWithWhereWithoutDocumentInput", {
        isAbstract: true
    })
], CommentUpdateManyWithWhereWithoutDocumentInput);
exports.CommentUpdateManyWithWhereWithoutDocumentInput = CommentUpdateManyWithWhereWithoutDocumentInput;
