"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentCreateOrConnectWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentCreateWithoutCommentsInput_1 = require("../inputs/DocumentCreateWithoutCommentsInput");
const DocumentWhereUniqueInput_1 = require("../inputs/DocumentWhereUniqueInput");
let DocumentCreateOrConnectWithoutCommentsInput = class DocumentCreateOrConnectWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentWhereUniqueInput_1.DocumentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentWhereUniqueInput_1.DocumentWhereUniqueInput)
], DocumentCreateOrConnectWithoutCommentsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentCreateWithoutCommentsInput_1.DocumentCreateWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentCreateWithoutCommentsInput_1.DocumentCreateWithoutCommentsInput)
], DocumentCreateOrConnectWithoutCommentsInput.prototype, "create", void 0);
DocumentCreateOrConnectWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocumentCreateOrConnectWithoutCommentsInput", {
        isAbstract: true
    })
], DocumentCreateOrConnectWithoutCommentsInput);
exports.DocumentCreateOrConnectWithoutCommentsInput = DocumentCreateOrConnectWithoutCommentsInput;
