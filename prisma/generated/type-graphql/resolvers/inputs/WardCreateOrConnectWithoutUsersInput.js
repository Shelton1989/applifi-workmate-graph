"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WardCreateOrConnectWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WardCreateWithoutUsersInput_1 = require("../inputs/WardCreateWithoutUsersInput");
const WardWhereUniqueInput_1 = require("../inputs/WardWhereUniqueInput");
let WardCreateOrConnectWithoutUsersInput = class WardCreateOrConnectWithoutUsersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardWhereUniqueInput_1.WardWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WardWhereUniqueInput_1.WardWhereUniqueInput)
], WardCreateOrConnectWithoutUsersInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardCreateWithoutUsersInput_1.WardCreateWithoutUsersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WardCreateWithoutUsersInput_1.WardCreateWithoutUsersInput)
], WardCreateOrConnectWithoutUsersInput.prototype, "create", void 0);
WardCreateOrConnectWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WardCreateOrConnectWithoutUsersInput", {
        isAbstract: true
    })
], WardCreateOrConnectWithoutUsersInput);
exports.WardCreateOrConnectWithoutUsersInput = WardCreateOrConnectWithoutUsersInput;
