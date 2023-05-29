"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentCreateNestedOneWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentCreateOrConnectWithoutCommentsInput_1 = require("../inputs/DocumentCreateOrConnectWithoutCommentsInput");
const DocumentCreateWithoutCommentsInput_1 = require("../inputs/DocumentCreateWithoutCommentsInput");
const DocumentWhereUniqueInput_1 = require("../inputs/DocumentWhereUniqueInput");
let DocumentCreateNestedOneWithoutCommentsInput = class DocumentCreateNestedOneWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentCreateWithoutCommentsInput_1.DocumentCreateWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentCreateWithoutCommentsInput_1.DocumentCreateWithoutCommentsInput)
], DocumentCreateNestedOneWithoutCommentsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentCreateOrConnectWithoutCommentsInput_1.DocumentCreateOrConnectWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentCreateOrConnectWithoutCommentsInput_1.DocumentCreateOrConnectWithoutCommentsInput)
], DocumentCreateNestedOneWithoutCommentsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentWhereUniqueInput_1.DocumentWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentWhereUniqueInput_1.DocumentWhereUniqueInput)
], DocumentCreateNestedOneWithoutCommentsInput.prototype, "connect", void 0);
DocumentCreateNestedOneWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocumentCreateNestedOneWithoutCommentsInput", {
        isAbstract: true
    })
], DocumentCreateNestedOneWithoutCommentsInput);
exports.DocumentCreateNestedOneWithoutCommentsInput = DocumentCreateNestedOneWithoutCommentsInput;
