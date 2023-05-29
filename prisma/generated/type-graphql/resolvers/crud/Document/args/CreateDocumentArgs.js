"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDocumentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentCreateInput_1 = require("../../../inputs/DocumentCreateInput");
let CreateDocumentArgs = class CreateDocumentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentCreateInput_1.DocumentCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentCreateInput_1.DocumentCreateInput)
], CreateDocumentArgs.prototype, "data", void 0);
CreateDocumentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateDocumentArgs);
exports.CreateDocumentArgs = CreateDocumentArgs;
