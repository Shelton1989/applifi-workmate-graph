"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentUpdateOneRequiredWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentCreateOrConnectWithoutCommentsInput_1 = require("../inputs/DocumentCreateOrConnectWithoutCommentsInput");
const DocumentCreateWithoutCommentsInput_1 = require("../inputs/DocumentCreateWithoutCommentsInput");
const DocumentUpdateWithoutCommentsInput_1 = require("../inputs/DocumentUpdateWithoutCommentsInput");
const DocumentUpsertWithoutCommentsInput_1 = require("../inputs/DocumentUpsertWithoutCommentsInput");
const DocumentWhereUniqueInput_1 = require("../inputs/DocumentWhereUniqueInput");
let DocumentUpdateOneRequiredWithoutCommentsInput = class DocumentUpdateOneRequiredWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentCreateWithoutCommentsInput_1.DocumentCreateWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentCreateWithoutCommentsInput_1.DocumentCreateWithoutCommentsInput)
], DocumentUpdateOneRequiredWithoutCommentsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentCreateOrConnectWithoutCommentsInput_1.DocumentCreateOrConnectWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentCreateOrConnectWithoutCommentsInput_1.DocumentCreateOrConnectWithoutCommentsInput)
], DocumentUpdateOneRequiredWithoutCommentsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentUpsertWithoutCommentsInput_1.DocumentUpsertWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentUpsertWithoutCommentsInput_1.DocumentUpsertWithoutCommentsInput)
], DocumentUpdateOneRequiredWithoutCommentsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentWhereUniqueInput_1.DocumentWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentWhereUniqueInput_1.DocumentWhereUniqueInput)
], DocumentUpdateOneRequiredWithoutCommentsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentUpdateWithoutCommentsInput_1.DocumentUpdateWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentUpdateWithoutCommentsInput_1.DocumentUpdateWithoutCommentsInput)
], DocumentUpdateOneRequiredWithoutCommentsInput.prototype, "update", void 0);
DocumentUpdateOneRequiredWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocumentUpdateOneRequiredWithoutCommentsInput", {
        isAbstract: true
    })
], DocumentUpdateOneRequiredWithoutCommentsInput);
exports.DocumentUpdateOneRequiredWithoutCommentsInput = DocumentUpdateOneRequiredWithoutCommentsInput;
