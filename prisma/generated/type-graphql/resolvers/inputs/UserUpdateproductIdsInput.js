"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateproductIdsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let UserUpdateproductIdsInput = class UserUpdateproductIdsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateproductIdsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdateproductIdsInput.prototype, "push", void 0);
UserUpdateproductIdsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateproductIdsInput", {
        isAbstract: true
    })
], UserUpdateproductIdsInput);
exports.UserUpdateproductIdsInput = UserUpdateproductIdsInput;
