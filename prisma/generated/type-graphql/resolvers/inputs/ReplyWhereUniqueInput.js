"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ReplyWhereUniqueInput = class ReplyWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReplyWhereUniqueInput.prototype, "id", void 0);
ReplyWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReplyWhereUniqueInput", {
        isAbstract: true
    })
], ReplyWhereUniqueInput);
exports.ReplyWhereUniqueInput = ReplyWhereUniqueInput;
