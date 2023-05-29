"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDocumentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentWhereUniqueInput_1 = require("../../../inputs/DocumentWhereUniqueInput");
let DeleteDocumentArgs = class DeleteDocumentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentWhereUniqueInput_1.DocumentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentWhereUniqueInput_1.DocumentWhereUniqueInput)
], DeleteDocumentArgs.prototype, "where", void 0);
DeleteDocumentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteDocumentArgs);
exports.DeleteDocumentArgs = DeleteDocumentArgs;
