"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantUpsertWithoutQueriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateWithoutQueriesInput_1 = require("../inputs/TenantCreateWithoutQueriesInput");
const TenantUpdateWithoutQueriesInput_1 = require("../inputs/TenantUpdateWithoutQueriesInput");
let TenantUpsertWithoutQueriesInput = class TenantUpsertWithoutQueriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateWithoutQueriesInput_1.TenantUpdateWithoutQueriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantUpdateWithoutQueriesInput_1.TenantUpdateWithoutQueriesInput)
], TenantUpsertWithoutQueriesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateWithoutQueriesInput_1.TenantCreateWithoutQueriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateWithoutQueriesInput_1.TenantCreateWithoutQueriesInput)
], TenantUpsertWithoutQueriesInput.prototype, "create", void 0);
TenantUpsertWithoutQueriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantUpsertWithoutQueriesInput", {
        isAbstract: true
    })
], TenantUpsertWithoutQueriesInput);
exports.TenantUpsertWithoutQueriesInput = TenantUpsertWithoutQueriesInput;
