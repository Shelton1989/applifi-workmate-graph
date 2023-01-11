"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantUpsertWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateWithoutUsersInput_1 = require("../inputs/TenantCreateWithoutUsersInput");
const TenantUpdateWithoutUsersInput_1 = require("../inputs/TenantUpdateWithoutUsersInput");
let TenantUpsertWithoutUsersInput = class TenantUpsertWithoutUsersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateWithoutUsersInput_1.TenantUpdateWithoutUsersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantUpdateWithoutUsersInput_1.TenantUpdateWithoutUsersInput)
], TenantUpsertWithoutUsersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateWithoutUsersInput_1.TenantCreateWithoutUsersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateWithoutUsersInput_1.TenantCreateWithoutUsersInput)
], TenantUpsertWithoutUsersInput.prototype, "create", void 0);
TenantUpsertWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantUpsertWithoutUsersInput", {
        isAbstract: true
    })
], TenantUpsertWithoutUsersInput);
exports.TenantUpsertWithoutUsersInput = TenantUpsertWithoutUsersInput;
