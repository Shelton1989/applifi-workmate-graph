"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentUpsertWithWhereUniqueWithoutCreatedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentCreateWithoutCreatedByInput_1 = require("../inputs/DocumentCreateWithoutCreatedByInput");
const DocumentUpdateWithoutCreatedByInput_1 = require("../inputs/DocumentUpdateWithoutCreatedByInput");
const DocumentWhereUniqueInput_1 = require("../inputs/DocumentWhereUniqueInput");
let DocumentUpsertWithWhereUniqueWithoutCreatedByInput = class DocumentUpsertWithWhereUniqueWithoutCreatedByInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentWhereUniqueInput_1.DocumentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentWhereUniqueInput_1.DocumentWhereUniqueInput)
], DocumentUpsertWithWhereUniqueWithoutCreatedByInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentUpdateWithoutCreatedByInput_1.DocumentUpdateWithoutCreatedByInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentUpdateWithoutCreatedByInput_1.DocumentUpdateWithoutCreatedByInput)
], DocumentUpsertWithWhereUniqueWithoutCreatedByInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentCreateWithoutCreatedByInput_1.DocumentCreateWithoutCreatedByInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentCreateWithoutCreatedByInput_1.DocumentCreateWithoutCreatedByInput)
], DocumentUpsertWithWhereUniqueWithoutCreatedByInput.prototype, "create", void 0);
DocumentUpsertWithWhereUniqueWithoutCreatedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocumentUpsertWithWhereUniqueWithoutCreatedByInput", {
        isAbstract: true
    })
], DocumentUpsertWithWhereUniqueWithoutCreatedByInput);
exports.DocumentUpsertWithWhereUniqueWithoutCreatedByInput = DocumentUpsertWithWhereUniqueWithoutCreatedByInput;
