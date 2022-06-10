"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeUpdateproductIdsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SizeUpdateproductIdsInput = class SizeUpdateproductIdsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SizeUpdateproductIdsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SizeUpdateproductIdsInput.prototype, "push", void 0);
SizeUpdateproductIdsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SizeUpdateproductIdsInput", {
        isAbstract: true
    })
], SizeUpdateproductIdsInput);
exports.SizeUpdateproductIdsInput = SizeUpdateproductIdsInput;
