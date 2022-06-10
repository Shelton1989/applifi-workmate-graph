"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyUpsertWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReplyCreateWithoutReactionsInput_1 = require("../inputs/ReplyCreateWithoutReactionsInput");
const ReplyUpdateWithoutReactionsInput_1 = require("../inputs/ReplyUpdateWithoutReactionsInput");
let ReplyUpsertWithoutReactionsInput = class ReplyUpsertWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyUpdateWithoutReactionsInput_1.ReplyUpdateWithoutReactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReplyUpdateWithoutReactionsInput_1.ReplyUpdateWithoutReactionsInput)
], ReplyUpsertWithoutReactionsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyCreateWithoutReactionsInput_1.ReplyCreateWithoutReactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReplyCreateWithoutReactionsInput_1.ReplyCreateWithoutReactionsInput)
], ReplyUpsertWithoutReactionsInput.prototype, "create", void 0);
ReplyUpsertWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReplyUpsertWithoutReactionsInput", {
        isAbstract: true
    })
], ReplyUpsertWithoutReactionsInput);
exports.ReplyUpsertWithoutReactionsInput = ReplyUpsertWithoutReactionsInput;
