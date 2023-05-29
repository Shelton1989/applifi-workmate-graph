"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentUpsertWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentCreateWithoutCommentsInput_1 = require("../inputs/DocumentCreateWithoutCommentsInput");
const DocumentUpdateWithoutCommentsInput_1 = require("../inputs/DocumentUpdateWithoutCommentsInput");
let DocumentUpsertWithoutCommentsInput = class DocumentUpsertWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentUpdateWithoutCommentsInput_1.DocumentUpdateWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentUpdateWithoutCommentsInput_1.DocumentUpdateWithoutCommentsInput)
], DocumentUpsertWithoutCommentsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentCreateWithoutCommentsInput_1.DocumentCreateWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentCreateWithoutCommentsInput_1.DocumentCreateWithoutCommentsInput)
], DocumentUpsertWithoutCommentsInput.prototype, "create", void 0);
DocumentUpsertWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocumentUpsertWithoutCommentsInput", {
        isAbstract: true
    })
], DocumentUpsertWithoutCommentsInput);
exports.DocumentUpsertWithoutCommentsInput = DocumentUpsertWithoutCommentsInput;
