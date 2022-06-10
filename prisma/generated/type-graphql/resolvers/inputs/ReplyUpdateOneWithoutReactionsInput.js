"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyUpdateOneWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReplyCreateOrConnectWithoutReactionsInput_1 = require("../inputs/ReplyCreateOrConnectWithoutReactionsInput");
const ReplyCreateWithoutReactionsInput_1 = require("../inputs/ReplyCreateWithoutReactionsInput");
const ReplyUpdateWithoutReactionsInput_1 = require("../inputs/ReplyUpdateWithoutReactionsInput");
const ReplyUpsertWithoutReactionsInput_1 = require("../inputs/ReplyUpsertWithoutReactionsInput");
const ReplyWhereUniqueInput_1 = require("../inputs/ReplyWhereUniqueInput");
let ReplyUpdateOneWithoutReactionsInput = class ReplyUpdateOneWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyCreateWithoutReactionsInput_1.ReplyCreateWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyCreateWithoutReactionsInput_1.ReplyCreateWithoutReactionsInput)
], ReplyUpdateOneWithoutReactionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyCreateOrConnectWithoutReactionsInput_1.ReplyCreateOrConnectWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyCreateOrConnectWithoutReactionsInput_1.ReplyCreateOrConnectWithoutReactionsInput)
], ReplyUpdateOneWithoutReactionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyUpsertWithoutReactionsInput_1.ReplyUpsertWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyUpsertWithoutReactionsInput_1.ReplyUpsertWithoutReactionsInput)
], ReplyUpdateOneWithoutReactionsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReplyUpdateOneWithoutReactionsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ReplyUpdateOneWithoutReactionsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyWhereUniqueInput_1.ReplyWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyWhereUniqueInput_1.ReplyWhereUniqueInput)
], ReplyUpdateOneWithoutReactionsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyUpdateWithoutReactionsInput_1.ReplyUpdateWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyUpdateWithoutReactionsInput_1.ReplyUpdateWithoutReactionsInput)
], ReplyUpdateOneWithoutReactionsInput.prototype, "update", void 0);
ReplyUpdateOneWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReplyUpdateOneWithoutReactionsInput", {
        isAbstract: true
    })
], ReplyUpdateOneWithoutReactionsInput);
exports.ReplyUpdateOneWithoutReactionsInput = ReplyUpdateOneWithoutReactionsInput;
