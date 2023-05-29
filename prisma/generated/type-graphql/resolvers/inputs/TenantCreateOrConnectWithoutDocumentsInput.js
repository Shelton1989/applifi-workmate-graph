"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantCreateOrConnectWithoutDocumentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateWithoutDocumentsInput_1 = require("../inputs/TenantCreateWithoutDocumentsInput");
const TenantWhereUniqueInput_1 = require("../inputs/TenantWhereUniqueInput");
let TenantCreateOrConnectWithoutDocumentsInput = class TenantCreateOrConnectWithoutDocumentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantWhereUniqueInput_1.TenantWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantWhereUniqueInput_1.TenantWhereUniqueInput)
], TenantCreateOrConnectWithoutDocumentsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateWithoutDocumentsInput_1.TenantCreateWithoutDocumentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateWithoutDocumentsInput_1.TenantCreateWithoutDocumentsInput)
], TenantCreateOrConnectWithoutDocumentsInput.prototype, "create", void 0);
TenantCreateOrConnectWithoutDocumentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantCreateOrConnectWithoutDocumentsInput", {
        isAbstract: true
    })
], TenantCreateOrConnectWithoutDocumentsInput);
exports.TenantCreateOrConnectWithoutDocumentsInput = TenantCreateOrConnectWithoutDocumentsInput;
