"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentUpdateWithWhereUniqueWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentUpdateWithoutTenantInput_1 = require("../inputs/DocumentUpdateWithoutTenantInput");
const DocumentWhereUniqueInput_1 = require("../inputs/DocumentWhereUniqueInput");
let DocumentUpdateWithWhereUniqueWithoutTenantInput = class DocumentUpdateWithWhereUniqueWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentWhereUniqueInput_1.DocumentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentWhereUniqueInput_1.DocumentWhereUniqueInput)
], DocumentUpdateWithWhereUniqueWithoutTenantInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentUpdateWithoutTenantInput_1.DocumentUpdateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentUpdateWithoutTenantInput_1.DocumentUpdateWithoutTenantInput)
], DocumentUpdateWithWhereUniqueWithoutTenantInput.prototype, "data", void 0);
DocumentUpdateWithWhereUniqueWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocumentUpdateWithWhereUniqueWithoutTenantInput", {
        isAbstract: true
    })
], DocumentUpdateWithWhereUniqueWithoutTenantInput);
exports.DocumentUpdateWithWhereUniqueWithoutTenantInput = DocumentUpdateWithWhereUniqueWithoutTenantInput;
