"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateNestedManyWithoutDocumentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateManyDocumentInputEnvelope_1 = require("../inputs/CommentCreateManyDocumentInputEnvelope");
const CommentCreateOrConnectWithoutDocumentInput_1 = require("../inputs/CommentCreateOrConnectWithoutDocumentInput");
const CommentCreateWithoutDocumentInput_1 = require("../inputs/CommentCreateWithoutDocumentInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentCreateNestedManyWithoutDocumentInput = class CommentCreateNestedManyWithoutDocumentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateWithoutDocumentInput_1.CommentCreateWithoutDocumentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentCreateNestedManyWithoutDocumentInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutDocumentInput_1.CommentCreateOrConnectWithoutDocumentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentCreateNestedManyWithoutDocumentInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateManyDocumentInputEnvelope_1.CommentCreateManyDocumentInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateManyDocumentInputEnvelope_1.CommentCreateManyDocumentInputEnvelope)
], CommentCreateNestedManyWithoutDocumentInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentCreateNestedManyWithoutDocumentInput.prototype, "connect", void 0);
CommentCreateNestedManyWithoutDocumentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateNestedManyWithoutDocumentInput", {
        isAbstract: true
    })
], CommentCreateNestedManyWithoutDocumentInput);
exports.CommentCreateNestedManyWithoutDocumentInput = CommentCreateNestedManyWithoutDocumentInput;
