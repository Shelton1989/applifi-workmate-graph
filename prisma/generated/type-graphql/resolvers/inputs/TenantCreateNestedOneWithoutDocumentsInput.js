"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantCreateNestedOneWithoutDocumentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateOrConnectWithoutDocumentsInput_1 = require("../inputs/TenantCreateOrConnectWithoutDocumentsInput");
const TenantCreateWithoutDocumentsInput_1 = require("../inputs/TenantCreateWithoutDocumentsInput");
const TenantWhereUniqueInput_1 = require("../inputs/TenantWhereUniqueInput");
let TenantCreateNestedOneWithoutDocumentsInput = class TenantCreateNestedOneWithoutDocumentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateWithoutDocumentsInput_1.TenantCreateWithoutDocumentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateWithoutDocumentsInput_1.TenantCreateWithoutDocumentsInput)
], TenantCreateNestedOneWithoutDocumentsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateOrConnectWithoutDocumentsInput_1.TenantCreateOrConnectWithoutDocumentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateOrConnectWithoutDocumentsInput_1.TenantCreateOrConnectWithoutDocumentsInput)
], TenantCreateNestedOneWithoutDocumentsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantWhereUniqueInput_1.TenantWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantWhereUniqueInput_1.TenantWhereUniqueInput)
], TenantCreateNestedOneWithoutDocumentsInput.prototype, "connect", void 0);
TenantCreateNestedOneWithoutDocumentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantCreateNestedOneWithoutDocumentsInput", {
        isAbstract: true
    })
], TenantCreateNestedOneWithoutDocumentsInput);
exports.TenantCreateNestedOneWithoutDocumentsInput = TenantCreateNestedOneWithoutDocumentsInput;
