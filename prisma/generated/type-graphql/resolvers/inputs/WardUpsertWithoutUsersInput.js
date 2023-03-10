"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WardUpsertWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WardCreateWithoutUsersInput_1 = require("../inputs/WardCreateWithoutUsersInput");
const WardUpdateWithoutUsersInput_1 = require("../inputs/WardUpdateWithoutUsersInput");
let WardUpsertWithoutUsersInput = class WardUpsertWithoutUsersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardUpdateWithoutUsersInput_1.WardUpdateWithoutUsersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WardUpdateWithoutUsersInput_1.WardUpdateWithoutUsersInput)
], WardUpsertWithoutUsersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardCreateWithoutUsersInput_1.WardCreateWithoutUsersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WardCreateWithoutUsersInput_1.WardCreateWithoutUsersInput)
], WardUpsertWithoutUsersInput.prototype, "create", void 0);
WardUpsertWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WardUpsertWithoutUsersInput", {
        isAbstract: true
    })
], WardUpsertWithoutUsersInput);
exports.WardUpsertWithoutUsersInput = WardUpsertWithoutUsersInput;
