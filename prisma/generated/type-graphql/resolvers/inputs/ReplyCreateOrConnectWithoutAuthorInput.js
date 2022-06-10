"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyCreateOrConnectWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReplyCreateWithoutAuthorInput_1 = require("../inputs/ReplyCreateWithoutAuthorInput");
const ReplyWhereUniqueInput_1 = require("../inputs/ReplyWhereUniqueInput");
let ReplyCreateOrConnectWithoutAuthorInput = class ReplyCreateOrConnectWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyWhereUniqueInput_1.ReplyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReplyWhereUniqueInput_1.ReplyWhereUniqueInput)
], ReplyCreateOrConnectWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyCreateWithoutAuthorInput_1.ReplyCreateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReplyCreateWithoutAuthorInput_1.ReplyCreateWithoutAuthorInput)
], ReplyCreateOrConnectWithoutAuthorInput.prototype, "create", void 0);
ReplyCreateOrConnectWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReplyCreateOrConnectWithoutAuthorInput", {
        isAbstract: true
    })
], ReplyCreateOrConnectWithoutAuthorInput);
exports.ReplyCreateOrConnectWithoutAuthorInput = ReplyCreateOrConnectWithoutAuthorInput;
