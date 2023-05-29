"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DocumentWhereUniqueInput = class DocumentWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocumentWhereUniqueInput.prototype, "id", void 0);
DocumentWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocumentWhereUniqueInput", {
        isAbstract: true
    })
], DocumentWhereUniqueInput);
exports.DocumentWhereUniqueInput = DocumentWhereUniqueInput;
