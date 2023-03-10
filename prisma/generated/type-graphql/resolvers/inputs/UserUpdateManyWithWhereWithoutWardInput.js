"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateManyWithWhereWithoutWardInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserScalarWhereInput_1 = require("../inputs/UserScalarWhereInput");
const UserUpdateManyMutationInput_1 = require("../inputs/UserUpdateManyMutationInput");
let UserUpdateManyWithWhereWithoutWardInput = class UserUpdateManyWithWhereWithoutWardInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserScalarWhereInput_1.UserScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserScalarWhereInput_1.UserScalarWhereInput)
], UserUpdateManyWithWhereWithoutWardInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateManyMutationInput_1.UserUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateManyMutationInput_1.UserUpdateManyMutationInput)
], UserUpdateManyWithWhereWithoutWardInput.prototype, "data", void 0);
UserUpdateManyWithWhereWithoutWardInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateManyWithWhereWithoutWardInput", {
        isAbstract: true
    })
], UserUpdateManyWithWhereWithoutWardInput);
exports.UserUpdateManyWithWhereWithoutWardInput = UserUpdateManyWithWhereWithoutWardInput;
