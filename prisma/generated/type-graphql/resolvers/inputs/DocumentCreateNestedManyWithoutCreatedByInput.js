"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentCreateNestedManyWithoutCreatedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentCreateManyCreatedByInputEnvelope_1 = require("../inputs/DocumentCreateManyCreatedByInputEnvelope");
const DocumentCreateOrConnectWithoutCreatedByInput_1 = require("../inputs/DocumentCreateOrConnectWithoutCreatedByInput");
const DocumentCreateWithoutCreatedByInput_1 = require("../inputs/DocumentCreateWithoutCreatedByInput");
const DocumentWhereUniqueInput_1 = require("../inputs/DocumentWhereUniqueInput");
let DocumentCreateNestedManyWithoutCreatedByInput = class DocumentCreateNestedManyWithoutCreatedByInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocumentCreateWithoutCreatedByInput_1.DocumentCreateWithoutCreatedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocumentCreateNestedManyWithoutCreatedByInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocumentCreateOrConnectWithoutCreatedByInput_1.DocumentCreateOrConnectWithoutCreatedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocumentCreateNestedManyWithoutCreatedByInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentCreateManyCreatedByInputEnvelope_1.DocumentCreateManyCreatedByInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentCreateManyCreatedByInputEnvelope_1.DocumentCreateManyCreatedByInputEnvelope)
], DocumentCreateNestedManyWithoutCreatedByInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocumentWhereUniqueInput_1.DocumentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocumentCreateNestedManyWithoutCreatedByInput.prototype, "connect", void 0);
DocumentCreateNestedManyWithoutCreatedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocumentCreateNestedManyWithoutCreatedByInput", {
        isAbstract: true
    })
], DocumentCreateNestedManyWithoutCreatedByInput);
exports.DocumentCreateNestedManyWithoutCreatedByInput = DocumentCreateNestedManyWithoutCreatedByInput;
