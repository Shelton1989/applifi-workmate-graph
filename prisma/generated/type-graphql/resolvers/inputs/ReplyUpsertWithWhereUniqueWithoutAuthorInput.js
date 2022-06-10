"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyUpsertWithWhereUniqueWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReplyCreateWithoutAuthorInput_1 = require("../inputs/ReplyCreateWithoutAuthorInput");
const ReplyUpdateWithoutAuthorInput_1 = require("../inputs/ReplyUpdateWithoutAuthorInput");
const ReplyWhereUniqueInput_1 = require("../inputs/ReplyWhereUniqueInput");
let ReplyUpsertWithWhereUniqueWithoutAuthorInput = class ReplyUpsertWithWhereUniqueWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyWhereUniqueInput_1.ReplyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReplyWhereUniqueInput_1.ReplyWhereUniqueInput)
], ReplyUpsertWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyUpdateWithoutAuthorInput_1.ReplyUpdateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReplyUpdateWithoutAuthorInput_1.ReplyUpdateWithoutAuthorInput)
], ReplyUpsertWithWhereUniqueWithoutAuthorInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyCreateWithoutAuthorInput_1.ReplyCreateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReplyCreateWithoutAuthorInput_1.ReplyCreateWithoutAuthorInput)
], ReplyUpsertWithWhereUniqueWithoutAuthorInput.prototype, "create", void 0);
ReplyUpsertWithWhereUniqueWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReplyUpsertWithWhereUniqueWithoutAuthorInput", {
        isAbstract: true
    })
], ReplyUpsertWithWhereUniqueWithoutAuthorInput);
exports.ReplyUpsertWithWhereUniqueWithoutAuthorInput = ReplyUpsertWithWhereUniqueWithoutAuthorInput;
