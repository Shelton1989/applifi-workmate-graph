"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreatemealIdsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let UserCreatemealIdsInput = class UserCreatemealIdsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], UserCreatemealIdsInput.prototype, "set", void 0);
UserCreatemealIdsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreatemealIdsInput", {
        isAbstract: true
    })
], UserCreatemealIdsInput);
exports.UserCreatemealIdsInput = UserCreatemealIdsInput;
