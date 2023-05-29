"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDocumentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentUpdateInput_1 = require("../../../inputs/DocumentUpdateInput");
const DocumentWhereUniqueInput_1 = require("../../../inputs/DocumentWhereUniqueInput");
let UpdateDocumentArgs = class UpdateDocumentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentUpdateInput_1.DocumentUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentUpdateInput_1.DocumentUpdateInput)
], UpdateDocumentArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentWhereUniqueInput_1.DocumentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentWhereUniqueInput_1.DocumentWhereUniqueInput)
], UpdateDocumentArgs.prototype, "where", void 0);
UpdateDocumentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateDocumentArgs);
exports.UpdateDocumentArgs = UpdateDocumentArgs;
