"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentUpdateManyWithWhereWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentScalarWhereInput_1 = require("../inputs/DocumentScalarWhereInput");
const DocumentUpdateManyMutationInput_1 = require("../inputs/DocumentUpdateManyMutationInput");
let DocumentUpdateManyWithWhereWithoutTenantInput = class DocumentUpdateManyWithWhereWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentScalarWhereInput_1.DocumentScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentScalarWhereInput_1.DocumentScalarWhereInput)
], DocumentUpdateManyWithWhereWithoutTenantInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentUpdateManyMutationInput_1.DocumentUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentUpdateManyMutationInput_1.DocumentUpdateManyMutationInput)
], DocumentUpdateManyWithWhereWithoutTenantInput.prototype, "data", void 0);
DocumentUpdateManyWithWhereWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocumentUpdateManyWithWhereWithoutTenantInput", {
        isAbstract: true
    })
], DocumentUpdateManyWithWhereWithoutTenantInput);
exports.DocumentUpdateManyWithWhereWithoutTenantInput = DocumentUpdateManyWithWhereWithoutTenantInput;
