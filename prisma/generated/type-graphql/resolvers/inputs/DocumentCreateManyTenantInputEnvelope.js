"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentCreateManyTenantInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentCreateManyTenantInput_1 = require("../inputs/DocumentCreateManyTenantInput");
let DocumentCreateManyTenantInputEnvelope = class DocumentCreateManyTenantInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocumentCreateManyTenantInput_1.DocumentCreateManyTenantInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], DocumentCreateManyTenantInputEnvelope.prototype, "data", void 0);
DocumentCreateManyTenantInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("DocumentCreateManyTenantInputEnvelope", {
        isAbstract: true
    })
], DocumentCreateManyTenantInputEnvelope);
exports.DocumentCreateManyTenantInputEnvelope = DocumentCreateManyTenantInputEnvelope;
