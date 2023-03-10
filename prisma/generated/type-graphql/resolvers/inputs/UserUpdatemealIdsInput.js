"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdatemealIdsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let UserUpdatemealIdsInput = class UserUpdatemealIdsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdatemealIdsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserUpdatemealIdsInput.prototype, "push", void 0);
UserUpdatemealIdsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdatemealIdsInput", {
        isAbstract: true
    })
], UserUpdatemealIdsInput);
exports.UserUpdatemealIdsInput = UserUpdatemealIdsInput;
