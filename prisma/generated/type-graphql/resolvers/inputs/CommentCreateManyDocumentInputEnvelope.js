"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateManyDocumentInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateManyDocumentInput_1 = require("../inputs/CommentCreateManyDocumentInput");
let CommentCreateManyDocumentInputEnvelope = class CommentCreateManyDocumentInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateManyDocumentInput_1.CommentCreateManyDocumentInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CommentCreateManyDocumentInputEnvelope.prototype, "data", void 0);
CommentCreateManyDocumentInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateManyDocumentInputEnvelope", {
        isAbstract: true
    })
], CommentCreateManyDocumentInputEnvelope);
exports.CommentCreateManyDocumentInputEnvelope = CommentCreateManyDocumentInputEnvelope;
