"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateManyDocumentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CommentCreateManyDocumentInput = class CommentCreateManyDocumentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateManyDocumentInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateManyDocumentInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentCreateManyDocumentInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentCreateManyDocumentInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentCreateManyDocumentInput.prototype, "updatedAt", void 0);
CommentCreateManyDocumentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateManyDocumentInput", {
        isAbstract: true
    })
], CommentCreateManyDocumentInput);
exports.CommentCreateManyDocumentInput = CommentCreateManyDocumentInput;
