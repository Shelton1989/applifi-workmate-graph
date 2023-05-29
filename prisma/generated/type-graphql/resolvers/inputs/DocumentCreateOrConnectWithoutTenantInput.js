"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentCreateOrConnectWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentCreateWithoutTenantInput_1 = require("../inputs/DocumentCreateWithoutTenantInput");
const DocumentWhereUniqueInput_1 = require("../inputs/DocumentWhereUniqueInput");
let DocumentCreateOrConnectWithoutTenantInput = class DocumentCreateOrConnectWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentWhereUniqueInput_1.DocumentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentWhereUniqueInput_1.DocumentWhereUniqueInput)
], DocumentCreateOrConnectWithoutTenantInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentCreateWithoutTenantInput_1.DocumentCreateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentCreateWithoutTenantInput_1.DocumentCreateWithoutTenantInput)
], DocumentCreateOrConnectWithoutTenantInput.prototype, "create", void 0);
DocumentCreateOrConnectWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocumentCreateOrConnectWithoutTenantInput", {
        isAbstract: true
    })
], DocumentCreateOrConnectWithoutTenantInput);
exports.DocumentCreateOrConnectWithoutTenantInput = DocumentCreateOrConnectWithoutTenantInput;
