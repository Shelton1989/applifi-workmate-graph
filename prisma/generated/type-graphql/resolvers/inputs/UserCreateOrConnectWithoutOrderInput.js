"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutOrderInput_1 = require("../inputs/UserCreateWithoutOrderInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutOrderInput = class UserCreateOrConnectWithoutOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutOrderInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutOrderInput_1.UserCreateWithoutOrderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutOrderInput_1.UserCreateWithoutOrderInput)
], UserCreateOrConnectWithoutOrderInput.prototype, "create", void 0);
UserCreateOrConnectWithoutOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutOrderInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutOrderInput);
exports.UserCreateOrConnectWithoutOrderInput = UserCreateOrConnectWithoutOrderInput;
