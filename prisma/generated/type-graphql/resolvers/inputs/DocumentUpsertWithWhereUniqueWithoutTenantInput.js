"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentUpsertWithWhereUniqueWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentCreateWithoutTenantInput_1 = require("../inputs/DocumentCreateWithoutTenantInput");
const DocumentUpdateWithoutTenantInput_1 = require("../inputs/DocumentUpdateWithoutTenantInput");
const DocumentWhereUniqueInput_1 = require("../inputs/DocumentWhereUniqueInput");
let DocumentUpsertWithWhereUniqueWithoutTenantInput = class DocumentUpsertWithWhereUniqueWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentWhereUniqueInput_1.DocumentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentWhereUniqueInput_1.DocumentWhereUniqueInput)
], DocumentUpsertWithWhereUniqueWithoutTenantInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentUpdateWithoutTenantInput_1.DocumentUpdateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentUpdateWithoutTenantInput_1.DocumentUpdateWithoutTenantInput)
], DocumentUpsertWithWhereUniqueWithoutTenantInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentCreateWithoutTenantInput_1.DocumentCreateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentCreateWithoutTenantInput_1.DocumentCreateWithoutTenantInput)
], DocumentUpsertWithWhereUniqueWithoutTenantInput.prototype, "create", void 0);
DocumentUpsertWithWhereUniqueWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocumentUpsertWithWhereUniqueWithoutTenantInput", {
        isAbstract: true
    })
], DocumentUpsertWithWhereUniqueWithoutTenantInput);
exports.DocumentUpsertWithWhereUniqueWithoutTenantInput = DocumentUpsertWithWhereUniqueWithoutTenantInput;
