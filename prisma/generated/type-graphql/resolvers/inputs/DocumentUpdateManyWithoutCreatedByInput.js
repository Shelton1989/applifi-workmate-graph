"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentUpdateManyWithoutCreatedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentCreateManyCreatedByInputEnvelope_1 = require("../inputs/DocumentCreateManyCreatedByInputEnvelope");
const DocumentCreateOrConnectWithoutCreatedByInput_1 = require("../inputs/DocumentCreateOrConnectWithoutCreatedByInput");
const DocumentCreateWithoutCreatedByInput_1 = require("../inputs/DocumentCreateWithoutCreatedByInput");
const DocumentScalarWhereInput_1 = require("../inputs/DocumentScalarWhereInput");
const DocumentUpdateManyWithWhereWithoutCreatedByInput_1 = require("../inputs/DocumentUpdateManyWithWhereWithoutCreatedByInput");
const DocumentUpdateWithWhereUniqueWithoutCreatedByInput_1 = require("../inputs/DocumentUpdateWithWhereUniqueWithoutCreatedByInput");
const DocumentUpsertWithWhereUniqueWithoutCreatedByInput_1 = require("../inputs/DocumentUpsertWithWhereUniqueWithoutCreatedByInput");
const DocumentWhereUniqueInput_1 = require("../inputs/DocumentWhereUniqueInput");
let DocumentUpdateManyWithoutCreatedByInput = class DocumentUpdateManyWithoutCreatedByInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocumentCreateWithoutCreatedByInput_1.DocumentCreateWithoutCreatedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocumentUpdateManyWithoutCreatedByInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocumentCreateOrConnectWithoutCreatedByInput_1.DocumentCreateOrConnectWithoutCreatedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocumentUpdateManyWithoutCreatedByInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocumentUpsertWithWhereUniqueWithoutCreatedByInput_1.DocumentUpsertWithWhereUniqueWithoutCreatedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocumentUpdateManyWithoutCreatedByInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentCreateManyCreatedByInputEnvelope_1.DocumentCreateManyCreatedByInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentCreateManyCreatedByInputEnvelope_1.DocumentCreateManyCreatedByInputEnvelope)
], DocumentUpdateManyWithoutCreatedByInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocumentWhereUniqueInput_1.DocumentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocumentUpdateManyWithoutCreatedByInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocumentWhereUniqueInput_1.DocumentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocumentUpdateManyWithoutCreatedByInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocumentWhereUniqueInput_1.DocumentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocumentUpdateManyWithoutCreatedByInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocumentWhereUniqueInput_1.DocumentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocumentUpdateManyWithoutCreatedByInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocumentUpdateWithWhereUniqueWithoutCreatedByInput_1.DocumentUpdateWithWhereUniqueWithoutCreatedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocumentUpdateManyWithoutCreatedByInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocumentUpdateManyWithWhereWithoutCreatedByInput_1.DocumentUpdateManyWithWhereWithoutCreatedByInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocumentUpdateManyWithoutCreatedByInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocumentScalarWhereInput_1.DocumentScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocumentUpdateManyWithoutCreatedByInput.prototype, "deleteMany", void 0);
DocumentUpdateManyWithoutCreatedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocumentUpdateManyWithoutCreatedByInput", {
        isAbstract: true
    })
], DocumentUpdateManyWithoutCreatedByInput);
exports.DocumentUpdateManyWithoutCreatedByInput = DocumentUpdateManyWithoutCreatedByInput;
