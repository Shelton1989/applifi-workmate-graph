"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentUpdateManyWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentCreateManyTenantInputEnvelope_1 = require("../inputs/DocumentCreateManyTenantInputEnvelope");
const DocumentCreateOrConnectWithoutTenantInput_1 = require("../inputs/DocumentCreateOrConnectWithoutTenantInput");
const DocumentCreateWithoutTenantInput_1 = require("../inputs/DocumentCreateWithoutTenantInput");
const DocumentScalarWhereInput_1 = require("../inputs/DocumentScalarWhereInput");
const DocumentUpdateManyWithWhereWithoutTenantInput_1 = require("../inputs/DocumentUpdateManyWithWhereWithoutTenantInput");
const DocumentUpdateWithWhereUniqueWithoutTenantInput_1 = require("../inputs/DocumentUpdateWithWhereUniqueWithoutTenantInput");
const DocumentUpsertWithWhereUniqueWithoutTenantInput_1 = require("../inputs/DocumentUpsertWithWhereUniqueWithoutTenantInput");
const DocumentWhereUniqueInput_1 = require("../inputs/DocumentWhereUniqueInput");
let DocumentUpdateManyWithoutTenantInput = class DocumentUpdateManyWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocumentCreateWithoutTenantInput_1.DocumentCreateWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocumentUpdateManyWithoutTenantInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocumentCreateOrConnectWithoutTenantInput_1.DocumentCreateOrConnectWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocumentUpdateManyWithoutTenantInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocumentUpsertWithWhereUniqueWithoutTenantInput_1.DocumentUpsertWithWhereUniqueWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocumentUpdateManyWithoutTenantInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentCreateManyTenantInputEnvelope_1.DocumentCreateManyTenantInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentCreateManyTenantInputEnvelope_1.DocumentCreateManyTenantInputEnvelope)
], DocumentUpdateManyWithoutTenantInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocumentWhereUniqueInput_1.DocumentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocumentUpdateManyWithoutTenantInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocumentWhereUniqueInput_1.DocumentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocumentUpdateManyWithoutTenantInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocumentWhereUniqueInput_1.DocumentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocumentUpdateManyWithoutTenantInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocumentWhereUniqueInput_1.DocumentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocumentUpdateManyWithoutTenantInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocumentUpdateWithWhereUniqueWithoutTenantInput_1.DocumentUpdateWithWhereUniqueWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocumentUpdateManyWithoutTenantInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocumentUpdateManyWithWhereWithoutTenantInput_1.DocumentUpdateManyWithWhereWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocumentUpdateManyWithoutTenantInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocumentScalarWhereInput_1.DocumentScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocumentUpdateManyWithoutTenantInput.prototype, "deleteMany", void 0);
DocumentUpdateManyWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocumentUpdateManyWithoutTenantInput", {
        isAbstract: true
    })
], DocumentUpdateManyWithoutTenantInput);
exports.DocumentUpdateManyWithoutTenantInput = DocumentUpdateManyWithoutTenantInput;
