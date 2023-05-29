"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpdateManyWithoutDocumentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateManyDocumentInputEnvelope_1 = require("../inputs/CommentCreateManyDocumentInputEnvelope");
const CommentCreateOrConnectWithoutDocumentInput_1 = require("../inputs/CommentCreateOrConnectWithoutDocumentInput");
const CommentCreateWithoutDocumentInput_1 = require("../inputs/CommentCreateWithoutDocumentInput");
const CommentScalarWhereInput_1 = require("../inputs/CommentScalarWhereInput");
const CommentUpdateManyWithWhereWithoutDocumentInput_1 = require("../inputs/CommentUpdateManyWithWhereWithoutDocumentInput");
const CommentUpdateWithWhereUniqueWithoutDocumentInput_1 = require("../inputs/CommentUpdateWithWhereUniqueWithoutDocumentInput");
const CommentUpsertWithWhereUniqueWithoutDocumentInput_1 = require("../inputs/CommentUpsertWithWhereUniqueWithoutDocumentInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentUpdateManyWithoutDocumentInput = class CommentUpdateManyWithoutDocumentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateWithoutDocumentInput_1.CommentCreateWithoutDocumentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutDocumentInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutDocumentInput_1.CommentCreateOrConnectWithoutDocumentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutDocumentInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutDocumentInput_1.CommentUpsertWithWhereUniqueWithoutDocumentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutDocumentInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateManyDocumentInputEnvelope_1.CommentCreateManyDocumentInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateManyDocumentInputEnvelope_1.CommentCreateManyDocumentInputEnvelope)
], CommentUpdateManyWithoutDocumentInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutDocumentInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutDocumentInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutDocumentInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutDocumentInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutDocumentInput_1.CommentUpdateWithWhereUniqueWithoutDocumentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutDocumentInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutDocumentInput_1.CommentUpdateManyWithWhereWithoutDocumentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutDocumentInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentScalarWhereInput_1.CommentScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentUpdateManyWithoutDocumentInput.prototype, "deleteMany", void 0);
CommentUpdateManyWithoutDocumentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpdateManyWithoutDocumentInput", {
        isAbstract: true
    })
], CommentUpdateManyWithoutDocumentInput);
exports.CommentUpdateManyWithoutDocumentInput = CommentUpdateManyWithoutDocumentInput;
