"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentCreateManyCreatedByInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentCreateManyCreatedByInput_1 = require("../inputs/DocumentCreateManyCreatedByInput");
let DocumentCreateManyCreatedByInputEnvelope = class DocumentCreateManyCreatedByInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocumentCreateManyCreatedByInput_1.DocumentCreateManyCreatedByInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], DocumentCreateManyCreatedByInputEnvelope.prototype, "data", void 0);
DocumentCreateManyCreatedByInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("DocumentCreateManyCreatedByInputEnvelope", {
        isAbstract: true
    })
], DocumentCreateManyCreatedByInputEnvelope);
exports.DocumentCreateManyCreatedByInputEnvelope = DocumentCreateManyCreatedByInputEnvelope;
