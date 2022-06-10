"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyUpdateWithWhereUniqueWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReplyUpdateWithoutAuthorInput_1 = require("../inputs/ReplyUpdateWithoutAuthorInput");
const ReplyWhereUniqueInput_1 = require("../inputs/ReplyWhereUniqueInput");
let ReplyUpdateWithWhereUniqueWithoutAuthorInput = class ReplyUpdateWithWhereUniqueWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyWhereUniqueInput_1.ReplyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReplyWhereUniqueInput_1.ReplyWhereUniqueInput)
], ReplyUpdateWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyUpdateWithoutAuthorInput_1.ReplyUpdateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReplyUpdateWithoutAuthorInput_1.ReplyUpdateWithoutAuthorInput)
], ReplyUpdateWithWhereUniqueWithoutAuthorInput.prototype, "data", void 0);
ReplyUpdateWithWhereUniqueWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReplyUpdateWithWhereUniqueWithoutAuthorInput", {
        isAbstract: true
    })
], ReplyUpdateWithWhereUniqueWithoutAuthorInput);
exports.ReplyUpdateWithWhereUniqueWithoutAuthorInput = ReplyUpdateWithWhereUniqueWithoutAuthorInput;
