"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SizeWhereUniqueInput = class SizeWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SizeWhereUniqueInput.prototype, "id", void 0);
SizeWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SizeWhereUniqueInput", {
        isAbstract: true
    })
], SizeWhereUniqueInput);
exports.SizeWhereUniqueInput = SizeWhereUniqueInput;
