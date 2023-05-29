"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentCreateNestedManyWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentCreateManyTenantInputEnvelope_1 = require("../inputs/DocumentCreateManyTenantInputEnvelope");
const DocumentCreateOrConnectWithoutTenantInput_1 = require("../inputs/DocumentCreateOrConnectWithoutTenantInput");
const DocumentCreateWithoutTenantInput_1 = require("../inputs/DocumentCreateWithoutTenantInput");
const DocumentWhereUniqueInput_1 = require("../inputs/DocumentWhereUniqueInput");
let DocumentCreateNestedManyWithoutTenantInput = class DocumentCreateNestedManyWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocumentCreateWithoutTenantInput_1.DocumentCreateWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocumentCreateNestedManyWithoutTenantInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocumentCreateOrConnectWithoutTenantInput_1.DocumentCreateOrConnectWithoutTenantInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocumentCreateNestedManyWithoutTenantInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentCreateManyTenantInputEnvelope_1.DocumentCreateManyTenantInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentCreateManyTenantInputEnvelope_1.DocumentCreateManyTenantInputEnvelope)
], DocumentCreateNestedManyWithoutTenantInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocumentWhereUniqueInput_1.DocumentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocumentCreateNestedManyWithoutTenantInput.prototype, "connect", void 0);
DocumentCreateNestedManyWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocumentCreateNestedManyWithoutTenantInput", {
        isAbstract: true
    })
], DocumentCreateNestedManyWithoutTenantInput);
exports.DocumentCreateNestedManyWithoutTenantInput = DocumentCreateNestedManyWithoutTenantInput;
