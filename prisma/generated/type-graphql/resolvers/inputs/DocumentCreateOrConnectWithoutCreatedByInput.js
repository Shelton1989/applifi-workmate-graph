"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentCreateOrConnectWithoutCreatedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentCreateWithoutCreatedByInput_1 = require("../inputs/DocumentCreateWithoutCreatedByInput");
const DocumentWhereUniqueInput_1 = require("../inputs/DocumentWhereUniqueInput");
let DocumentCreateOrConnectWithoutCreatedByInput = class DocumentCreateOrConnectWithoutCreatedByInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentWhereUniqueInput_1.DocumentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentWhereUniqueInput_1.DocumentWhereUniqueInput)
], DocumentCreateOrConnectWithoutCreatedByInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentCreateWithoutCreatedByInput_1.DocumentCreateWithoutCreatedByInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentCreateWithoutCreatedByInput_1.DocumentCreateWithoutCreatedByInput)
], DocumentCreateOrConnectWithoutCreatedByInput.prototype, "create", void 0);
DocumentCreateOrConnectWithoutCreatedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocumentCreateOrConnectWithoutCreatedByInput", {
        isAbstract: true
    })
], DocumentCreateOrConnectWithoutCreatedByInput);
exports.DocumentCreateOrConnectWithoutCreatedByInput = DocumentCreateOrConnectWithoutCreatedByInput;
