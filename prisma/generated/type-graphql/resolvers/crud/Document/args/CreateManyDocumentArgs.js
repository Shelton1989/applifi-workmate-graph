"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyDocumentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentCreateManyInput_1 = require("../../../inputs/DocumentCreateManyInput");
let CreateManyDocumentArgs = class CreateManyDocumentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocumentCreateManyInput_1.DocumentCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyDocumentArgs.prototype, "data", void 0);
CreateManyDocumentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyDocumentArgs);
exports.CreateManyDocumentArgs = CreateManyDocumentArgs;
