"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateNestedManyWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateManyAuthorInputEnvelope_1 = require("../inputs/CommentCreateManyAuthorInputEnvelope");
const CommentCreateOrConnectWithoutAuthorInput_1 = require("../inputs/CommentCreateOrConnectWithoutAuthorInput");
const CommentCreateWithoutAuthorInput_1 = require("../inputs/CommentCreateWithoutAuthorInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentCreateNestedManyWithoutAuthorInput = class CommentCreateNestedManyWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateWithoutAuthorInput_1.CommentCreateWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentCreateNestedManyWithoutAuthorInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutAuthorInput_1.CommentCreateOrConnectWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentCreateNestedManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateManyAuthorInputEnvelope_1.CommentCreateManyAuthorInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateManyAuthorInputEnvelope_1.CommentCreateManyAuthorInputEnvelope)
], CommentCreateNestedManyWithoutAuthorInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentWhereUniqueInput_1.CommentWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentCreateNestedManyWithoutAuthorInput.prototype, "connect", void 0);
CommentCreateNestedManyWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateNestedManyWithoutAuthorInput", {
        isAbstract: true
    })
], CommentCreateNestedManyWithoutAuthorInput);
exports.CommentCreateNestedManyWithoutAuthorInput = CommentCreateNestedManyWithoutAuthorInput;
