"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyCreateNestedManyWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReplyCreateManyAuthorInputEnvelope_1 = require("../inputs/ReplyCreateManyAuthorInputEnvelope");
const ReplyCreateOrConnectWithoutAuthorInput_1 = require("../inputs/ReplyCreateOrConnectWithoutAuthorInput");
const ReplyCreateWithoutAuthorInput_1 = require("../inputs/ReplyCreateWithoutAuthorInput");
const ReplyWhereUniqueInput_1 = require("../inputs/ReplyWhereUniqueInput");
let ReplyCreateNestedManyWithoutAuthorInput = class ReplyCreateNestedManyWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyCreateWithoutAuthorInput_1.ReplyCreateWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReplyCreateNestedManyWithoutAuthorInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyCreateOrConnectWithoutAuthorInput_1.ReplyCreateOrConnectWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReplyCreateNestedManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyCreateManyAuthorInputEnvelope_1.ReplyCreateManyAuthorInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyCreateManyAuthorInputEnvelope_1.ReplyCreateManyAuthorInputEnvelope)
], ReplyCreateNestedManyWithoutAuthorInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyWhereUniqueInput_1.ReplyWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReplyCreateNestedManyWithoutAuthorInput.prototype, "connect", void 0);
ReplyCreateNestedManyWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReplyCreateNestedManyWithoutAuthorInput", {
        isAbstract: true
    })
], ReplyCreateNestedManyWithoutAuthorInput);
exports.ReplyCreateNestedManyWithoutAuthorInput = ReplyCreateNestedManyWithoutAuthorInput;
