"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeCreateproductIdsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SizeCreateproductIdsInput = class SizeCreateproductIdsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], SizeCreateproductIdsInput.prototype, "set", void 0);
SizeCreateproductIdsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SizeCreateproductIdsInput", {
        isAbstract: true
    })
], SizeCreateproductIdsInput);
exports.SizeCreateproductIdsInput = SizeCreateproductIdsInput;
