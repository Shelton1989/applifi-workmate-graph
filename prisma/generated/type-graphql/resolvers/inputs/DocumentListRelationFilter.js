"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentWhereInput_1 = require("../inputs/DocumentWhereInput");
let DocumentListRelationFilter = class DocumentListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentWhereInput_1.DocumentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentWhereInput_1.DocumentWhereInput)
], DocumentListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentWhereInput_1.DocumentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentWhereInput_1.DocumentWhereInput)
], DocumentListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentWhereInput_1.DocumentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentWhereInput_1.DocumentWhereInput)
], DocumentListRelationFilter.prototype, "none", void 0);
DocumentListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("DocumentListRelationFilter", {
        isAbstract: true
    })
], DocumentListRelationFilter);
exports.DocumentListRelationFilter = DocumentListRelationFilter;
