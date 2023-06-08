"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentUpdateWithWhereUniqueWithoutCreatedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentUpdateWithoutCreatedByInput_1 = require("../inputs/DocumentUpdateWithoutCreatedByInput");
const DocumentWhereUniqueInput_1 = require("../inputs/DocumentWhereUniqueInput");
let DocumentUpdateWithWhereUniqueWithoutCreatedByInput = class DocumentUpdateWithWhereUniqueWithoutCreatedByInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentWhereUniqueInput_1.DocumentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentWhereUniqueInput_1.DocumentWhereUniqueInput)
], DocumentUpdateWithWhereUniqueWithoutCreatedByInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentUpdateWithoutCreatedByInput_1.DocumentUpdateWithoutCreatedByInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentUpdateWithoutCreatedByInput_1.DocumentUpdateWithoutCreatedByInput)
], DocumentUpdateWithWhereUniqueWithoutCreatedByInput.prototype, "data", void 0);
DocumentUpdateWithWhereUniqueWithoutCreatedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocumentUpdateWithWhereUniqueWithoutCreatedByInput", {
        isAbstract: true
    })
], DocumentUpdateWithWhereUniqueWithoutCreatedByInput);
exports.DocumentUpdateWithWhereUniqueWithoutCreatedByInput = DocumentUpdateWithWhereUniqueWithoutCreatedByInput;
